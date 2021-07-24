import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  title = "AngularApp";


  constructor(private http: HttpClient) { }
  httpData: any;
  counter: number = 1;
  rightCoutner: number = 0;


  //Varriables for every buttom
  a1: boolean = false;
  a3: boolean = false;
  a2: boolean = false;
  a4: boolean = false;
  submit() {
    this.counter++;
    console.log("Answer submitted");

    if (this.a1 == true) {
      if (this.httpData.aR == this.httpData.a1) {
        console.log("right");
        this.rightCoutner++;
      }
    }
    if (this.a2 == true) {
      if (this.httpData.aR == this.httpData.a2) {
        console.log("right");
        this.rightCoutner++;
      }
    }
    if (this.a3 == true) {
      if (this.httpData.aR == this.httpData.a3) {
        console.log("right");
        this.rightCoutner++;
      }
    }
    if (this.a4 == true) {
      if (this.httpData.aR == this.httpData.a4) {
        console.log("right");
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
    this.a2 = false;
    this.a3 = false;
    this.a4 = false;
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

  ngOnInit() {
    this.http.get(`http://localhost:8080/questions/${this.counter}`)
      .subscribe((data) => this.httpData = data);
  }
  displaydata(data: any) { this.httpData = data; }
}