import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;

userColl = ([{
             personId: 1,
             name: 'john doe',
             addr: 'placeholder',
             age: '1'
           }]);

  constructor(private _data: DataService) { }

  ngOnInit() {

    this._data.castA.subscribe(res => this.userColl = res);

      this.tableData1 = {
          headerRow: [ 'ID', 'Name', 'Country', 'City'],
          dataRows: [
              ['1', 'Dakota Rice', 'Curaçao', 'Oud-Turnhout'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas']
          ]
      };
  }

}
