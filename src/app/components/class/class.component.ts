import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services/progress.service';
import { Module } from '../../models/module';
import { Progress } from '../../models/progress';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  classes: Module[];
  progress: Progress;
  constructor(private progressService: ProgressService) {
    this.classes = this.progressService.getClasses();
    this.progress = this.progressService.getProgressInfo();
  }

  ngOnInit() {
  }

}
