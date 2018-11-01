import { Injectable } from '@angular/core';
import { PROGRESS } from '../mocks/mock-progress';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor() { }

  getClasses(){
    return PROGRESS.liveClasses;
  }

  getProgressInfo(){
    return PROGRESS.progress;
  }

  getPractices(){
    return PROGRESS.items.filter(module => module['type'] == 'Practice');
  }
  getLessons(){
    return PROGRESS.items.filter(module => module['type'] == 'Lesson');
  }
}
