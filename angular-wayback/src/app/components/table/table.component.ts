import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() cols: []
  @Input() rows: []
  @Input() style: string
  @Output() sendSelected = new EventEmitter<Array<number>>();

  public rowSelected = []

  constructor() {

  }
  ngOnInit(): void {
    console.log(this.rows);

  }

  selected(index) {

    if (this.rowSelected.find(element => element === index) === undefined) {
      this.rowSelected.push(index)
      this.sendSelected.emit(this.rowSelected)
    } else {
      this.rowSelected = this.rowSelected.filter((item) => item !== index)
      this.sendSelected.emit(this.rowSelected)
    }
  }

  selectedOne(index) {
    return this.rowSelected.find(element => element === index)

  }
}
