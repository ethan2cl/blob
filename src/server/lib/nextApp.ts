import next from "next";

const dev = process.env.NODE_ENV !== "production";
export const nextApp = next({ dev });
// 串通next服务器的request
export const handle = nextApp.getRequestHandler();
