import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Accept as an input an object of type Task
  // Data will be passed from the parent to the child component, therefore an input to the child component
  // In this case we will pass the task from the app component to the task component
  @Input() task: Task | null = null;
  // This will emit the output to the parent component
  // Data will be passed from the child component to the parent component, therefore outputting the child component
  // In this case we will pass the edits from the task component to the app component
  @Output() edit = new EventEmitter<Task>();
}
