import { Component, computed, ElementRef, input, model, signal, viewChild } from '@angular/core';

@Component({
  selector: 'vn-gauge',
  template: `

  @let __value = value(); 
  @let __label = label();

  @let __center = center(); 
  @let __viewBoxSize = viewBoxSize(); 
  @let __radius =radius();
  @let __strokeWidth =strokeWidth();
  @let __circumference =circumference();
  @let __strokeDashOffset =strokeDashOffset();
  @let __totalArcLength = totalArcLength();
  @let __totalArcGap = totalArcGap();

  <div 
  #gaugeContainer 
  class="gauge-container"
  (pointerdown)="onPointerDown($event)"
  (pointermove)="onPointerMove($event)"
  (pointerup)="onPointerUp($event)"
>
  <svg [attr.viewBox]="'0 0 ' + __viewBoxSize + ' ' + __viewBoxSize" class="gauge-svg">
    <!-- Background Track (Gray Arc) -->
    <circle
      [attr.cx]="__center"
      [attr.cy]="__center"
      [attr.r]="__radius"
      [attr.stroke-width]="__strokeWidth"
      class="gauge-track"
      [attr.stroke-dasharray]="__totalArcLength + ' ' + __totalArcGap"
    />
    
    <!-- Active Progress Arc (Colored) -->
    <circle
      [attr.cx]="__center"
      [attr.cy]="__center"
      [attr.r]="__radius"
      [attr.stroke-width]="__strokeWidth"
      class="gauge-progress"
      [attr.stroke-dasharray]="__circumference"
      [attr.stroke-dashoffset]="__strokeDashOffset"
    />
  </svg>

  <!-- Centered Value Overlay -->
  <div class="gauge-label-container">
    <span class="gauge-value">{{ __value }}</span>
    <span class="gauge-label">{{ __label }}</span>
  </div>
</div>
  `,
  styles: `
  .gauge-container {
  position: relative;
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
  cursor: pointer;
  touch-action: none;
  user-select: none;
}

.gauge-svg {
  transform: rotate(135deg); 
  transform-origin: center;
  width: 100%;
  height: auto;
}

circle {
  fill: none;
  stroke-linecap: round;
}

.gauge-track {
  stroke:var(--mat-sys-primary-fixed);
}

.gauge-progress {
  stroke: var(--mat-sys-primary);
  transition: stroke-dashoffset 0.05s ease-out; 
}

.gauge-label-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none; 
}

.gauge-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--mat-sys-primary);
  font-variant-numeric: tabular-nums; 
}

.gauge-label {
  font-size: 0.875rem;
  color: var(--mat-sys-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
  `
})
export class GaugeComponent {

  min = input(0);
  max = input(100);
  label = input<string | null>(null);
  value = model.required<number>();

  gaugeContainer = viewChild<ElementRef<HTMLDivElement>>('gaugeContainer');

  // SVG Geometry Config
  radius = input(80);
  strokeWidth = input(16);
  viewBoxSize = input(200);
  center = computed(() => this.viewBoxSize() / 2)

  // Circumference calculations
  circumference = computed(() => 2 * Math.PI * this.radius())
  totalArcLength = computed(() => this.circumference() * 0.75) // 270 degrees
  totalArcGap = computed(() => this.circumference() * 0.25)

  private isDragging = signal(false);

  // Calculates how much of the stroke to hide
  strokeDashOffset = computed(() => {

    const percentage = (this.value() - this.min()) / (this.max() - this.min());
    // Invert because dashoffset shrinks the visible line from the end
    return this.circumference() - (this.totalArcLength() * percentage);
  })

  // Handle pointer interactions (mouse & touch)
  onPointerDown(event: PointerEvent): void {
    this.isDragging.set(true);
    this.gaugeContainer()?.nativeElement.setPointerCapture(event.pointerId);
    this.updateValueFromCoords(event);
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.isDragging()) return;
    this.updateValueFromCoords(event);
  }

  onPointerUp(event: PointerEvent): void {
    if (!this.isDragging()) return;
    this.isDragging.set(false)
    this.gaugeContainer()?.nativeElement.releasePointerCapture(event.pointerId);
  }
  private updateValueFromCoords(event: PointerEvent): void {
    const rect = this.gaugeContainer()?.nativeElement.getBoundingClientRect();
    if (!rect) return;

    // 1. Get coordinates relative to the circle's center
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    // 2. Get the standard polar angle (-180 to 180 deg) where 3 o'clock is 0°
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    // 3. Shift the system so the START of the gauge (135° standard polar) is 0°
    // Moving clockwise means we subtract 135 from our angle.
    let adjustedAngle = angle - 135;

    // 4. Normalize to a strict positive 0 - 360 range
    if (adjustedAngle < 0) {
      adjustedAngle += 360;
    }

    // 5. Handle the 90-degree dead zone (which sits between 270° and 360°)
    if (adjustedAngle > 270) {
      // Determine which side of the dead zone the pointer is closer to
      // If it's over 315° (closer to 360°/0°), snap to minimum value.
      // Otherwise, snap to maximum value (270°).
      adjustedAngle = adjustedAngle > 315 ? 0 : 270;
    }

    // 6. Map the safe 0-270 angle directly to your value scale
    const percentage = adjustedAngle / 270;
    const rawValue = this.min() + percentage * (this.max() - this.min());

    // Update your signal cleanly
    this.value.set(Math.round(rawValue));
  }
}


