import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()

export class DataService {
  //how many users
  private count = 0;

  private userColl = new BehaviorSubject<any>([{
                                               personId: 1,
                                               name: 'john doe',
                                               email: 'placeholder',
                                               addr: 'placeholder'
                                             }]);
  castA = this.userColl.asObservable();

  private sleepHours = new BehaviorSubject<any>([0, 5, 10]);
  cast = this.sleepHours.asObservable();

  private sadHours = new BehaviorSubject<any>([0, 2, 4]);
  cast2 = this.sadHours.asObservable();

  private onlineHours = new BehaviorSubject<any>([0, 3, 7]);
  cast3 = this.onlineHours.asObservable();

  private genderMale = new BehaviorSubject<any>([0]);
  cast4 = this.genderMale.asObservable();
  private genderFemale = new BehaviorSubject<any>([0]);
  cast5 = this.genderFemale.asObservable();
  private genderNone = new BehaviorSubject<any>([0]);
  cast6 = this.genderNone.asObservable();

  private age1 = new BehaviorSubject<any>([0]);
  cast7 = this.age1.asObservable();
  private age2 = new BehaviorSubject<any>([0]);
  cast8 = this.age2.asObservable();
  private age3 = new BehaviorSubject<any>([0]);
  cast9 = this.age3.asObservable();

  constructor() { }

addSleep(dataObj) {
    const curr = this.sleepHours.value;
    const upd = [...curr, dataObj];
    this.sleepHours.next(upd);
}
addSad(dataObj) {
  const curr2 = this.sadHours.value;
  const upd2 = [...curr2, dataObj];
  this.sadHours.next(upd2);
}
addOnline(dataObj) {
  const curr3 = this.onlineHours.value;
  const upd3 = [...curr3, dataObj];
  this.onlineHours.next(upd3);
}
addGen(dataObj) {
    if(dataObj == 0)
    {
      const curr4 = this.genderMale.value;
      const upd4 = [...curr4, dataObj];
      this.genderMale.next(upd4);
    }
    else if(dataObj == 1)
    {
      const curr4 = this.genderFemale.value;
      const upd4 = [...curr4, dataObj];
      this.genderFemale.next(upd4);
    }
    else if(dataObj == 2)
    {
      const curr4 = this.genderNone.value;
      const upd4 = [...curr4, dataObj];
      this.genderNone.next(upd4);
    }
}
addAge(dataObj) {
  if(dataObj == 1)
  {
    const curr4 = this.age1.value;
    const upd4 = [...curr4, dataObj];
    this.age1.next(upd4);
  }
  if(dataObj == 2)
  {
    const curr4 = this.age2.value;
    const upd4 = [...curr4, dataObj];
    this.age2.next(upd4);
  }
  if(dataObj == 3)
  {
    const curr4 = this.age3.value;
    const upd4 = [...curr4, dataObj];
    this.age3.next(upd4);
  }
}
addUser(name, email, addr) {
  const curr = this.userColl.value;
  const upd = [...curr, {
                          personId: this.count+1,
                          name: name,
                          email: email,
                          addr: addr
                        }];
  this.userColl.next(upd);
}
}
