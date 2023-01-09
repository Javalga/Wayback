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
  @Input() allSelected: [];
  @Output() sendSelected = new EventEmitter<Array<number>>();
  @Output() sendIndex = new EventEmitter<number>();
  @Output() sendButtonValue = new EventEmitter<string>();

  public rowSelected = []
  public selectedRow;
  public buttonValue;

  constructor(public asideHeader: AsideHeaderService) {

  }
  ngOnInit(): void {

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
    } else if (this.selectedRow === undefined) {
      this.selectedRow = index;
      this.sendIndex.emit(this.selectedRow)
      this.buttonValue = "Modificar";
      this.sendButtonValue.emit(this.buttonValue);
    } else if (this.selectedRow === index) {
      this.selectedRow = undefined;
      this.sendIndex.emit(this.selectedRow);
      this.buttonValue = "Crear";
      this.sendButtonValue.emit(this.buttonValue);
    } else {
      this.selectedRow = index;
      this.sendIndex.emit(this.selectedRow);
      this.buttonValue = "Modificar";
      this.sendButtonValue.emit(this.buttonValue);
    }



  }

  selectedOne(index) {
    if (this.asideHeader.state != 'Usuarios' && this.asideHeader.state != 'Pool de solucionadas' && this.asideHeader.state != 'Devoluciones') {
      return this.rowSelected.find(element => element === index)
    } else if (this.asideHeader.state === 'Pool de solucionadas' || this.asideHeader.state === 'Devoluciones') {
      this.rowSelected = this.allSelected
      this.sendSelected.emit(this.rowSelected)
      return this.rowSelected.find(element => element === index)
    } else
      return this.selectedRow;

  }
}
