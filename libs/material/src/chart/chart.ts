import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'vn-chart',
  template: `
  <canvas #canvas [style.width]="width() +'px'" [style.height]="height() +'px'" ></canvas>
  `,

})
export class ChartComponent<TChartType extends ChartType, TChartData extends ChartData<TChartType> = ChartData<TChartType>, TChartOptions extends ChartOptions<TChartType> = ChartOptions<TChartType>> implements AfterViewInit {

  protected canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  protected chart?: Chart<TChartType>;


  width = input<number>(350);
  height = input<number>(360 / 1.618);



  type = input.required<TChartType>();
  data = input.required<TChartData>();
  options = input.required<TChartOptions>();

  protected init() {
    const canvasElement = this.canvasRef()?.nativeElement;
    const ctx = canvasElement?.getContext('2d')
    if (ctx) {
      this.chart = new Chart<TChartType>(ctx, {
        type: this.type(),
        data: this.data(),
        options: this.options()
      });
    }
  }

  ngAfterViewInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

}
