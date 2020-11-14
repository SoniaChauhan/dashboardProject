import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }
  userId = null;
  isNewDetails = false;
  firstStep = true;

  myImage : string = "assets/images/map.png";
  proImage : string = "assets/images/profile.jpg";
  letterImage : string = "assets/images/angularIcon.png";

  getSales() {
    return of({
      "year1": {
        "volumeSales": "0.09",
        "valueSales": "1.23"
      },
      "year2": {
        "volumeSales": "0.11",
        "valueSales": "1.56"
      },
      "year3": {
        "volumeSales": "0.12",
        "valueSales": "1.69"
      },
      "year4": {
        "volumeSales": "0.12",
        "valueSales": "1.64"
      },
      "year5": {
        "volumeSales": "0.10",
        "valueSales": "1.41"
      },
      "total": {
        "volumeSales": "0.55",
        "valueSales": "7.53"
      }
    });
  }


  private apiURLId1 = "https://reqres.in/api/users/1";
  private apiURLId2 = "https://reqres.in/api/users/2";
  private apiURLId3 = "https://reqres.in/api/users/3";
  private apiURLId4 = "https://reqres.in/api/users/4";
  private apiURLId5 = "https://reqres.in/api/users/5";
  private apiURLId6 = "https://reqres.in/api/users/6";
  firstId:{};
  secondId:{};
  thirdId:{};
  fourthId:{};
  fifthId:{};
  sixthId:{};

  async firstRunningMethod() {
    try{
      let response = await fetch(this.apiURLId1);
      let readAbleData = await response.json();
      this.firstId = readAbleData.data;
    } catch(error){console.log(error)}
  }

  async secondRunningMethod() {
    try{
      let response = await fetch(this.apiURLId2);
      let readAbleData = await response.json();
      this.secondId = readAbleData.data;

    } catch(error){console.log(error)}
  }

  async thirdRunningMethod() {
    try{
      let response = await fetch(this.apiURLId3);
      let readAbleData = await response.json();
      this.thirdId = readAbleData.data;
    } catch(error){console.log(error)}
  }

  async fourthRunningMethod() {
    try{
      let response = await fetch(this.apiURLId4);
      let readAbleData = await response.json();
      this.fourthId = readAbleData.data;
    } catch(error){console.log(error)}
  }

  async fifthRunningMethod() {
    try{
      let response = await fetch(this.apiURLId5);
      let readAbleData = await response.json();
      this.fifthId = readAbleData.data;
    } catch(error){console.log(error)}
  }

  async sixthRunningMethod() {
    try{
      let response = await fetch(this.apiURLId6);
      let readAbleData = await response.json();
      this.sixthId = readAbleData.data;
    } catch(error){console.log(error)}
  }
}
