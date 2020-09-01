import { ToDoService } from "../services/todo";
import { Context } from "aws-lambda";
import { MessageUtil } from "../utils/Message";
export class ToDOController extends ToDoService {
  async createTodo(event: any, context?: Context) {}

  async updateTodo(event: any, context?: Context) {}

  async deleteTod(event: any, context?: Context) {}

  async findAllTodos(event: any, context?: Context) {}

  async findTodo(event: any, context?: Context) {}
}
