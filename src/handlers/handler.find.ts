import { Handler, Context } from "aws-lambda";

import { middleware } from "../middleware/index";
import { ToDOController } from "../controllers/todo";
const todoController = new ToDOController();

// we can separate out these handler function into its own layer
export const find: Handler = middleware((event: any, context: Context) => {
  return todoController.findAllTodos(event, context);
});
