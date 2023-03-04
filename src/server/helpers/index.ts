import { ExpressResponseResult } from "@/shared";
import { OkPacket, ResultSetHeader, RowDataPacket } from "mysql2";
import dbPool from "../mysql";

export const result = {
  success: <T>(
    data: T | null = null,
    code?: ExpressResponseResult<T>["code"]
  ): ExpressResponseResult<T | null> => ({
    code: code ?? 200,
    data,
  }),
  error: (
    error: ExpressResponseResult["error"],
    code?: ExpressResponseResult["code"]
  ): ExpressResponseResult => ({ code: code ?? 400, error }),
};

export const querySync = async <
  R extends
    | RowDataPacket[][]
    | RowDataPacket[]
    | OkPacket
    | OkPacket[]
    | ResultSetHeader
>(
  sql: string,
  params: any[]
) => {
  return new Promise<R>((resolve, reject) => {
    dbPool.query<R>(sql, params, (err, result) => {
      if (err) {
        // TODO: 统一处理数据库请求报错
        return reject(err);
      }
      resolve(result);
    });
  });
};

export const querySyncInsert = async () => {
  await querySync;
};
