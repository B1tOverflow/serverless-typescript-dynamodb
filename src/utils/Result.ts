export class Result {
  private statusCode: number;
  private code: number;
  private message: string;
  private data?: any;
  private success: boolean;
  private error?: any;
  constructor(
    statusCode: number,
    code: number,
    success: boolean,
    message: string,
    data?: any
  ) {
    this.statusCode = statusCode;
    this.code = code;
    this.message = message;
    this.data = data;
    this.success = success;
  }

  /**
   * Serverless: According to the API Gateway specs, the body content must be stringified
   */
  bodyToString() {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({
        code: this.code,
        message: this.message,
        success: this.success,
        data: this.data,
      }),
    };
  }
}
