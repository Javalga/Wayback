import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';


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
  @Output() sendIndex = new EventEmitter<number>();

  public rowSelected = []
  public selectedRow;

  constructor(public asideHeader: AsideHeaderService) {

  }
  ngOnInit(): void {
    console.log(this.rows);

  }

  selected(index) {
    if (this.asideHeader.state != 'Usuarios') {
      if (this.rowSelected.find(element => element === index) === undefined) {
        this.rowSelected.push(index)
        this.sendSelected.emit(this.rowSelected)
      } else {
        this.rowSelected = this.rowSelected.filter((item) => item !== index)
        this.sendSelected.emit(this.rowSelected)
      }
    } else {
      this.selectedRow = index;
      this.sendIndex.emit(this.selectedRow)


    }
  }

  selectedOne(index) {
    if (this.asideHeader.state != 'Usuarios') {
      return this.rowSelected.find(element => element === index)
    } else return this.selectedRow;

  }
}
