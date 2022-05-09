// This will be the interface of the tasks in the Kanban board.
// This is essentially the model of each task in the Kanban board.

export interface Task {
  id?: string;
  title: string;
  description: string;
}
