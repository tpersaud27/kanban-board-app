import { Component } from '@angular/core';
import { Task } from './task/task';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // This array will be used to create a few tasks
  // This array will be of type Task and contain task objects
  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void {}

  drop(event: CdkDragDrop<Task[] | null>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
