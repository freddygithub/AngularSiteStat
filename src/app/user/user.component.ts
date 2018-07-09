import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

sleepHour: number;
sleepHours = [];
sadHour: number;
sadHours = [];
onlineHour: number;
onlineHours = [];
age: number;
gen: number;


constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.cast.subscribe(res => this.sleepHours = res);
    this._data.cast2.subscribe(res2 => this.sadHours = res2);
    this._data.cast3.subscribe(res3 => this.onlineHours = res3);
  }
  check1() {
    this.sleepHour = Number((document.getElementById("sleepH") as HTMLInputElement).value);
    this.sadHour = Number((document.getElementById("sadH") as HTMLInputElement).value);
    this.onlineHour = Number((document.getElementById("onlineH") as HTMLInputElement).value);
  }
  addButton() {
    this._data.addSleep(this.sleepHour);
    this._data.addSad(this.sadHour);
    this._data.addOnline(this.onlineHour);
    document.getElementById("demo").innerHTML = "Hello " + this.age;
  }
  ageCheck(value1) {
    this._data.addAge(value1);
  }
  genCheck(value1) {
    this._data.addGen(value1);
  }
  userCheck() {
    var name = (document.getElementById('naming') as HTMLInputElement).value;
    var email = (document.getElementById('emailing') as HTMLInputElement).value;
    var addr = (document.getElementById('addring1') as HTMLInputElement).value + (document.getElementById('addring2') as HTMLInputElement).value;
    this._data.addUser(name, addr, email);
  }

}
