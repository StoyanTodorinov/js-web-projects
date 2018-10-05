import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() data: Object | Array<any>;
  formattedData: Array<any>;
  toolTipText: String = 'Copy to clipboard';

  constructor() { }

  ngOnInit() {
    if (this.data.constructor !== Array) {
      this.formattedData = [];
      for (const key in this.data) {
        const element = this.data[key];
        this.formattedData.push({ key: key, value: JSON.stringify(this.data[key], null, 2) });
      }
    }
  }

  copy(value) {
    // CREATE TEXTAREA, SET VALUE AND COPY THE VALUE TO CLIPBOARD
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    // SHOW A QUICK TOOLTIP NOTIFICATION
    this.toolTipText = 'Copied!';
    setTimeout(() => {
      this.toolTipText = 'Copy to clipboard'
    }, 1000)
  }
}
