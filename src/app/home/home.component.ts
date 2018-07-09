import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


sleepData: any;
sadData: any;
onlineData: any;

genderMale: any;
genderFemale: any;
genderNone: any;
age1: any;
age2: any;
age3: any;

constructor(private _data: DataService) {
}

    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];

  ngOnInit() {

       this._data.cast.subscribe(res => this.sleepData = res);
       this._data.cast2.subscribe(res2 => this.sadData = res2);
       this._data.cast3.subscribe(res3 => this.onlineData = res3);

       this._data.cast4.subscribe(res4 => this.genderMale = res4);
       this._data.cast5.subscribe(res5 => this.genderFemale = res5);
       this._data.cast6.subscribe(res6 => this.genderNone = res6);

       this._data.cast7.subscribe(res7 => this.age1 = res7);
       this._data.cast8.subscribe(res7 => this.age2 = res7);
       this._data.cast9.subscribe(res7 => this.age3 = res7);

      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: [this.genderMale.length+'%', this.genderFemale.length+'%', this.genderNone.length+'%'],
        series: [this.genderMale.length, this.genderFemale.length, this.genderNone.length]
      };
      this.emailChartLegendItems = [
        { title: 'Male', imageClass: 'fa fa-circle text-info' },
        { title: 'Female', imageClass: 'fa fa-circle text-danger' },
        { title: 'Unsubscribed', imageClass: 'fa fa-circle text-warning' }
      ];

      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['6:00PM', '9:00PM', '12:00PM', '3:00AM'],
        series: [
          this.sleepData,
          this.onlineData,
          this.sadData
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 10,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Sleep', imageClass: 'fa fa-circle text-info' },
        { title: 'Hours Spend Online', imageClass: 'fa fa-circle text-danger' },
        { title: 'Saddness', imageClass: 'fa fa-circle text-warning' }
      ];

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
        { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
      ];

    }
}
