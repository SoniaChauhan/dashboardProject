import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor(public _emp: DetailsService,) {}
    Object = Object;
    ngOnInit() {}
    goToFirstPage = () => {
      this._emp.firstStep = true;
      this._emp.isNewDetails = false;
    }

}
