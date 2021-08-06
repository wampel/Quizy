import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.scss']
})
export class F1Component implements OnInit {

  title = 'AngularApp';

  constructor(private http: HttpClient) {}
  httpData: any;
  pathHttpData: any;
  counter: number = 1;
  rightCoutner: number = 0;
  path: string = "f1";


  //Variables for every button
  a1: boolean = false;
  a3: boolean = false;
  a2: boolean = false;
  a4: boolean = false;

  submit() {
    this.counter++;
    console.log('Answer submitted');

    if (this.a1 == true) {
      if (this.httpData.aR == this.httpData.a1) {
        console.log('right');
        this.rightCoutner++;
      }
    }
    if (this.a2 == true) {
      if (this.httpData.aR == this.httpData.a2) {
        console.log('right');
        this.rightCoutner++;
      }
    }
    if (this.a3 == true) {
      if (this.httpData.aR == this.httpData.a3) {
        console.log('right');
        this.rightCoutner++;
      }
    }
    if (this.a4 == true) {
      if (this.httpData.aR == this.httpData.a4) {
        console.log('right');
        this.rightCoutner++;
      }
    }

    this.a1 = false;
    this.a2 = false;
    this.a3 = false;
    this.a4 = false;
    this.ngOnInit();

  }

  changeOne() {
    this.a1 = !this.a1;
    console.log(this.a1);
    this.a2 = false;
    this.a3 = false;
    this.a4 = false;
    console.log(this.pathHttpData.path);
  }
  changeTwo() {
    this.a2 = !this.a2;
    this.a1 = false;
    this.a3 = false;
    this.a4 = false;
  }
  changeThree() {
    this.a3 = !this.a3;
    this.a2 = false;
    this.a1 = false;
    this.a4 = false;
  }
  changeFour() {
    this.a4 = !this.a4;
    this.a2 = false;
    this.a3 = false;
    this.a1 = false;
  }

  lookCache() {
    console.log("test");
    this.http
    .get(`http://localhost:8080/cache`)
    .subscribe((data2) => (this.pathHttpData = data2));
  }
  displayData(data2: any) {
    this.pathHttpData = data2
  }



  newOnInit() {
    this.http
      .get(`http://localhost:8080/${this.path}/${this.counter}`)
      .subscribe((data) => (this.httpData = data));

  }
  displaydata(data: any) {
    this.httpData = data;
  }

  ngOnInit() {
  this.lookCache();
  this.newOnInit();
  }
}
