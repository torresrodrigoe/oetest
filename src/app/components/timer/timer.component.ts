import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timeString : string;
  durationInit = 60;
  duration : number;
  seconds = "00";
  minutes = "01";
  clockDisplay : string;
  interval: any;

  constructor() {
    this.duration = this.durationInit;
  }

  ngOnInit() {
    this.tickTick();
  }

  startLive(){
    this.duration = this.durationInit;
    this.tickTick();
  }

  tickTick(){
    if(this.duration > 0){
      this.interval = setInterval( () => {
        this.duration = this.duration - 1;

        if(this.duration <=0 ){
          clearInterval(this.interval);
        }

        if(this.duration % 60 < 10){
          this.seconds = "0"+this.duration%60;
        }else{
          this.seconds = (this.duration%60).toString();
        }

        if(this.duration / 60 < 10 ){
          this.minutes = "0"+parseInt(""+this.duration/60,10);
        }else{
          this.minutes = ""+parseInt((this.duration / 60).toString(),10);
        }

        this.clockDisplay = this.minutes + " : " +this.seconds; },1000);
      }else{

      }
    }
  }
