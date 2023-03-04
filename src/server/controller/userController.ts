import { Request, Response } from "express";
import { result } from "../helpers";
import { addUser, getUserByUsername } from "../service";

export const login = async (request: Request, response: Response) => {
  const { username } = request.body;
  const user = await getUserByUsername(username);
  if (user) {
    if (user.password !== request.body.password) {
      return response.send(
        result.error({ errorCode: 1001, errorMessage: "密码不正确!" })
      );
    }
    return response.send(result.success());
  } else {
    return response.send(
      result.error({ errorCode: 1002, errorMessage: `用户${username}不存在!` })
    );
  }
};

export const register = async (request: Request, response: Response) => {
  const user = await getUserByUsername(request.body.username);
  if (user) {
    return response.send(
      result.error({ errorCode: 1003, errorMessage: "用户已存在!" })
    );
  } else {
    await addUser(request.body);
    return response.send(result.success());
  }
};
