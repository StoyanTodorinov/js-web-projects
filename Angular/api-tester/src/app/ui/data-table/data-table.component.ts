import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() data: Object | Array<any>;
  formattedData: Array<any>;

  constructor() { }

  ngOnInit() {
    if (this.data.constructor !== Array) {
      this.formattedData = [];
      for (const key in this.data) {
          const element = this.data[key];
          this.formattedData.push({key: key, value: JSON.stringify(this.data[key], null, 2)});
      }
    }
  }
}
