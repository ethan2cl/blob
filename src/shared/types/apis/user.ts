import { RowDataPacket } from "mysql2";
import { UserSchema } from "./Schema";

export interface UserSchemaRowDataPacket extends UserSchema, RowDataPacket {}
