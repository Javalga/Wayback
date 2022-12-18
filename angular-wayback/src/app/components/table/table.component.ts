import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() cols: []
  @Input() rows: []
  @Input() style: string
  constructor() {

  }
  ngOnInit(): void {
    console.log(this.rows);

  }
}
