import { Component, Input } from '@angular/core';
import { BaseFilterCellComponent, FilterService } from '@progress/kendo-angular-grid';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-grid-dropdown-filter',
  templateUrl: './grid-dropdown-filter.component.html',
  styleUrls: ['./grid-dropdown-filter.component.scss']
})
export class GridDropdownFilterComponent extends BaseFilterCellComponent {

  @Input(`filter`) filter: CompositeFilterDescriptor;
  @Input(`data`) data: string[];
  @Input(`valueField`) valueField: string;
  @Input(`defaultItem`) defaultItem: string = `All`;

  selectedValue: string;

  constructor(filterService: FilterService) {
    super(filterService);
  }

  valueChange = (value: any): void => {
    this.selectedValue = value;
    this.applyFilter(value === this.defaultItem ?
      this.removeFilter(this.valueField) :
      this.updateFilter({
        field: this.valueField,
        operator: `eq`,
        value: value
    }));
  };

}
