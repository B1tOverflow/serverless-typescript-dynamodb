import { Handler, Context } from "aws-lambda";

import { middleware } from "../middleware/index";
import { ToDOController } from "../controllers/todo";
const todoController = new ToDOController();

export const deleteOne: Handler = middleware((event: any, context: Context) => {
  return todoController.deleteTodo(event, context);
});
