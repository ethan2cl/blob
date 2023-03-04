import { UserSchema, UserSchemaRowDataPacket } from "@/shared";
import { querySync } from "../helpers";

export const addUser = async (params: UserSchema) => {
  try {
    const sql = "insert into user (username,password) values (?,?)";
    await querySync(sql, [params.username, params.password]);
    return params;
  } catch (error) {
    console.log("add user error", error);
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const sql = "select * from user where username = ?";
    const data = await querySync<UserSchemaRowDataPacket[]>(sql, [username]);
    return data?.[0];
  } catch (error) {
    console.log("get username error", error);
  }
};
