import { Result } from "./Result";
import statusCode from "http-status-codes";
export class MessageUtil {
  static success(statusCode, data: object) {
    const result = new Result(statusCode, 0, true, "success", data);

    return result.bodyToString();
  }

  static error(statusCode, code = 1000, message: string) {
    const result = new Result(statusCode, code, false, message);

    return result.bodyToString();
  }
}
