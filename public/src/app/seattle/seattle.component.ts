import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  report: any;

  constructor(private _httpservice: HttpService , private _route: ActivatedRoute,private _router: Router) { }

  ngOnInit() {
    this.getcity()
  }

  getcity(){
    let obs = this._httpservice.getWeather("seattle");
    obs.subscribe(data => {
      this.report = data;
      console.log(this.report)
    });
  }
}
