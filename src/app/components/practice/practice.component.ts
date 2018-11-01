import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services/progress.service';
import { Module } from '../../models/module';
import { Progress } from '../../models/progress';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  practices: Module[];
  progress: Progress;
  sliderOptions = { margin: 20, dots: false, navigation: true, nav: true, navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'], responsive:{ 0:{ items: 1 }, 450:{ items: 2 }, 760:{ items: 3 } } };
  constructor(private progressService: ProgressService) {
    this.practices = this.progressService.getPractices();
    this.progress = this.progressService.getProgressInfo();
  }
  ngOnInit() {
  }

}
