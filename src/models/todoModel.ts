export class TodoModel {
  id: number;
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.id = Date.now();
    this.title = title;
    this.completed = false;
  }
}
