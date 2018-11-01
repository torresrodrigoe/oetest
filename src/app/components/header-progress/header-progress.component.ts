import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-header-progress',
  templateUrl: './header-progress.component.html',
  styleUrls: ['./header-progress.component.scss']
})
export class HeaderProgressComponent implements OnInit {
  progress: any;
  constructor(private progressService: ProgressService) {
    this.progress = this.progressService.getProgressInfo();
  }

  ngOnInit() {
  }

}
