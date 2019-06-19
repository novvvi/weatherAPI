import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  report: any;

  constructor(private _httpservice: HttpService , private _route: ActivatedRoute,private _router: Router) { }

  ngOnInit() {
    this.getcity()
  }

  getcity(){
    let obs = this._httpservice.getWeather("san+jose");
    obs.subscribe(data => {
      this.report = data;
      console.log(this.report)
    });
  }
}