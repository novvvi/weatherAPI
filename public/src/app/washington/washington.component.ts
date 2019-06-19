import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  report: any;

  constructor(private _httpservice: HttpService , private _route: ActivatedRoute,private _router: Router) { }

  ngOnInit() {
    this.getcity()
  }

  getcity(){
    let obs = this._httpservice.getWeather("washington");
    obs.subscribe(data => {
      this.report = data;
      console.log(this.report)
    });
  }
}