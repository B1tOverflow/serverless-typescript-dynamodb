import { ToDoService } from "../services/todo";
import { Context } from "aws-lambda";
import { v4 as uuid } from "uuid";
import { MessageUtil } from "../utils/Message";
export class ToDOController extends ToDoService {
  async createTodo(event: any, context?: Context) {
    const { title } = event.body;
    const now = new Date();
    const todo = {
      id: uuid(),
      // tslint:disable-next-line:object-shorthand-properties-first
      title,
      status: "OPEN",
      createdAt: now.toISOString(),
    };
    try {
      const result = await this.create(todo);
      return MessageUtil.success(201, todo);
    } catch (error) {
      return MessageUtil.error(error.code, 500, error.message);
    }
  }

  async updateTodo(event: any, context?: Context) {
    const id = Number(event.pathParameters.id);
    const body = JSON.parse(event.body);
    try {
      const result = await this.update(body);
      return MessageUtil.success(200, result);
    } catch (error) {
      return MessageUtil.error(error.code, 500, error.message);
    }
  }

  async deleteTodo(event: any, context?: Context) {
    const id = Number(event.pathParameters.id);
    try {
      const result = await this.delete(id);
      return MessageUtil.success(200, result);
    } catch (error) {
      return MessageUtil.error(error.code, 500, error.message);
    }
  }

  async findAllTodos(event: any, context?: Context) {
    try {
      const result = await this.findAll();
      return MessageUtil.success(200, result);
    } catch (error) {
      return MessageUtil.error(error.code, 500, error.message);
    }
  }

  async findTodo(event: any, context?: Context) {
    const id = Number(event.pathParameters.id);
    try {
      const result = await this.find(id);
      return MessageUtil.success(200, result);
    } catch (error) {
      return MessageUtil.error(error.code, 500, error.message);
    }
  }
}
