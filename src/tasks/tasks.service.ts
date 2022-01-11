import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  //get all tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }

  //get task by id
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  //craete a task
  createTask(CreateTaskDto: CreateTaskDto): Task {
    // destructuring
    const { title, description } = CreateTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
