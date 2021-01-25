import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public breakpoint: number = 0;
  private factsList: string[] = [
    'Reusable components, that saves your time while developing large scale apps',
    'Unit-testing is much easier for the developers',
    'In Angular, you can apply injectors that treat conditions as outside components' ,
    'You can avoid to re-writing the code when developing a new app',
    'Angular is maintained and updated by developers in Google' ,
    'Ivy is the code name for Angular\'s next-generation compilation and rendering pipeline' 
  ];
  public randomFact: string = this.factsList[0];
  public animating: boolean = false;
  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 720 ? 4 : 6;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 720 ? 4 : 6;
  }

  randomFactGenerator() {
    this.animating = true;
    this.randomFact = this.factsList[
      Math.floor(Math.random() * this.factsList.length)
    ];
    setTimeout(() => {
      this.animating = !this.animating;
    }, 500);
  }
}
