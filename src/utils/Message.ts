import { Result } from "./Result";
import statusCode from "http-status-codes";
export class MessageUtil {
  /**
   *
   * @param statusCode http status code for the request
   * @param data data sent back to the client
   */
  static success(statusCode, data: object) {
    const result = new Result(statusCode, 0, true, "success", data);

    return result.bodyToString();
  }

  /**
   *
   * @param statusCode http status code for the request
   * @param code  internal codes for the request. Default is 1000
   * @param message Message Sent back to the client as error
   */
  static error(statusCode, code = 1000, message: string) {
    const result = new Result(statusCode, code, false, message);

    return result.bodyToString();
  }
}
