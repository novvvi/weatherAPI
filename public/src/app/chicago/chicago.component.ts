import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  report: any;

  constructor(private _httpservice: HttpService , private _route: ActivatedRoute,private _router: Router) { }

  ngOnInit() {
    this.getcity()
  }

  getcity(){
    let obs = this._httpservice.getWeather("chicago");
    obs.subscribe(data => {
      this.report = data;
      console.log(this.report)
    });
  }
}