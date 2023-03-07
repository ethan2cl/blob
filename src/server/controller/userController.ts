import {
  BlobNextFunction,
  BlobRequest,
  BlobResponse,
  UserSchema,
} from "@/shared";
import { result } from "../helpers";
import { addUser, getUserByUsername } from "../service";

export const login = async (
  request: BlobRequest<UserSchema>,
  response: BlobResponse,
  next: BlobNextFunction
) => {
  const { username } = request.body;
  const user = await getUserByUsername(username);
  if (user) {
    if (user.password !== request.body.password) {
      response.send(
        result.error({ errorCode: 1001, errorMessage: "密码不正确!" })
      );
    }
    response.send(result.success());
  } else {
    response.send(
      result.error({ errorCode: 1002, errorMessage: `用户${username}不存在!` })
    );
  }
  next();
};

export const register = async (
  request: BlobRequest<UserSchema>,
  response: BlobResponse,
  next: BlobNextFunction
) => {
  const user = await getUserByUsername(request.body.username);
  if (user) {
    response.send(
      result.error({ errorCode: 1003, errorMessage: "用户已存在!" })
    );
  } else {
    await addUser(request.body);
    response.send(result.success());
  }
  next();
};

export const getUser = async (
  request: BlobRequest,
  response: BlobResponse,
  next: BlobNextFunction
) => {
  const user = await getUserByUsername(request.body.username);
  response.send(result.success(user));
  next();
};
