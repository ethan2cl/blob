import { default as _session } from "express-session";
import { BlobNextFunction, BlobRequest, BlobResponse, SECRET } from "@/shared";

export const session = (
  request: BlobRequest,
  response: BlobResponse,
  next: BlobNextFunction
) => _session({ secret: SECRET })(request, response, next);

const a = "unAuthorized";
