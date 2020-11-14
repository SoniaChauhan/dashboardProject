import { Component, OnDestroy, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'materialChartjs';

  private apiURL = "https://reqres.in/api/users";

  mdeiaSub:Subscription;
  deviceXs:boolean;

  constructor(public _emp: DetailsService) {}


    public barChartOptions: any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels: string[];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
      { data: [], label: 'Volume Sales' },
      { data: [], label: 'Value Sales' }
    ];
    tiles = [
      {text: 'One', cols: 1, rows: 1, color: 'white',},
      {text: 'Two', cols: 1, rows: 1, color: 'white'},
      {text: 'Three', cols: 1, rows: 1, color: 'white'},

    ];
  ngOnInit() {
    this._emp.getSales().subscribe(data => {
      this.barChartLabels = Object.keys(data);
      this.barChartLabels.forEach(label => {
        this.barChartData[0].data.push(data[label]['volumeSales']);
        this.barChartData[1].data.push(data[label]['valueSales']);
      });
    });;

    this.longRunningMethod();

  }

ngOnDestroy(){
  this.mdeiaSub.unsubscribe();
}

  arr = [];
  async longRunningMethod() {
    try{
      let response = await fetch(this.apiURL);
      let readAbleData = await response.json();
      this.arr = readAbleData.data;
      console.log(readAbleData)

    } catch(error){console.log(error)}

  }

  showDetails = (_ID) => {
     this._emp.isNewDetails = true;
     this._emp.firstStep = false;
    this._emp.userId = _ID;
    console.log(`this._emp.userId =  ${this._emp.userId}`)
    if(this._emp.userId==1){
    this._emp.firstRunningMethod();
    }
    if(this._emp.userId==2){
      this._emp.secondRunningMethod();
    }
    if(this._emp.userId==3){
      this._emp.thirdRunningMethod();
    }
    if(this._emp.userId==4){
      this._emp.fourthRunningMethod();
    }
    if(this._emp.userId==5){
      this._emp.fifthRunningMethod();
    }
    if(this._emp.userId==6){
      this._emp.sixthRunningMethod();
    }


      }


}
