import { Component, computed, input } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { CasingPipe } from '@vnodes/material/casing';

export type TableColumn = {
  name: string;
  label?: string;
  prefixText?: string;
  suffixText?: string;
  format?: (value: string) => string;
}

@Component({
  selector: 'vn-table',
  imports: [MatTableModule, MatPaginatorModule, CasingPipe],
  template: `

    @let __data = data(); 
    @let __columns =computedColumns ();
    @let __size=__data?.length;
    @let __pageSizeOptions = pageSizeOptions(); 
    @let __pageSize = __pageSizeOptions[3];
    @let __paginatorLabel = paginatorLabel();
    @let __displayedColumns = displayedColumns();

    @if(__data){ 

      <table mat-table 
      [dataSource]="__data" 
      matSort 
      matSortDisableClear 
      >
      @for(col of __columns; track col.name){ 
        <ng-container [matColumnDef]="col.name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>
            {{(col.label || col.name) | casing: 'title'}}
          </th>
          <td mat-cell *matCellDef="let row">
            {{col.prefixText ?? ""}}{{ row[col.name] }} {{col.suffixText ?? ""}}
          </td>
        </ng-container>
      }
      
      <tr mat-header-row *matHeaderRowDef="__displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: __displayedColumns;"></tr>
    </table>

    <mat-paginator 
      [length]="__size"
      [pageSize]="__pageSize"
      [pageSizeOptions]="__pageSizeOptions"
      [aria-label]="__paginatorLabel">
    </mat-paginator>
    
  }

  `,
})
export class TableComponent<T> {
  data = input.required<T[]>()
  columns = input<TableColumn[]>();

  pageSizeOptions = input<MatPaginator['pageSizeOptions']>([1, 2, 10, 20, 30, 50, 100, 200, 400, 1000])

  dataColumns = computed<TableColumn[]>(() => {
    const keys = Object.keys(this.data()[0] ?? {});
    return keys.map(e => ({ name: e }))
  })

  computedColumns = computed(() => {
    return this.columns() ?? this.dataColumns()
  })

  displayedColumns = computed(() => {
    return this.computedColumns().map(e => e.name)
  })


  paginatorLabel = input<string>()
}
