import awsSdk from "aws-sdk";
const dynamoDb = new awsSdk.DynamoDB.DocumentClient();

export class ToDoService {
  protected async create(params): Promise<any> {
    try {
      const result = await dynamoDb
        .put({
          TableName: process.env.TODO_TABLE_NAME,
          Item: params,
        })
        .promise();
      const data = result.$response.data;
      return data;
    } catch (error) {
      return error;
    }
  }

  protected async find(id): Promise<any> {
    try {
      const result = await dynamoDb
        .get({
          TableName: process.env.TODO_TABLE_NAME,
          Key: {
            id,
          },
        })
        .promise();
      const data = result.Item;
      return data;
    } catch (error) {
      return error;
    }
  }

  protected async findAll(): Promise<any[]> {
    try {
      const result = await dynamoDb
        .scan({
          TableName: process.env.TODO_TABLE_NAME,
        })
        .promise();
      const data = result.Items;
      return data;
    } catch (error) {
      return error;
    }
  }

  protected async update(params): Promise<any> {
    const { key, UpdateExpression, ExpressionAttributeValues } = params;
    try {
      const result = await dynamoDb
        .update({
          TableName: process.env.TODO_TABLE_NAME,
          Key: {
            ...key,
          },
          UpdateExpression: UpdateExpression,
          ExpressionAttributeValues: {
            ...ExpressionAttributeValues,
          },
          ReturnValues: "ALL_NEW", // fetch all new and updated values
        })
        .promise();
      const data = result.Attributes;
      return data;
    } catch (error) {
      return error;
    }
  }

  protected async delete(id): Promise<any> {
    try {
      const result = await dynamoDb
        .delete({
          TableName: process.env.TODO_TABLE_NAME,
          Key: {
            id,
          },
        })
        .promise();
      const data = result.Attributes;
      return data;
    } catch (error) {
      return error;
    }
  }
}
