import { nextApp, handle, session } from "./lib";
import express, { Express, Router } from "express";
import bodyParser from "body-parser";
import apiRouter from "./router";
import { globalConfig } from "@/shared";

const { BASE_URL, PORT } = globalConfig;

let app: Express, router: Router;

nextApp
  .prepare()
  // server setting
  .then(() => {
    app = express();
    router = express.Router();
    app
      .use(session)
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }))
      // waiting for bodyParse...
      .use(router)
      .get("*", (req, res) => handle(req, res));
  })
  // router setting
  .then(() => {
    router.use("/api", apiRouter);
  })
  // listen
  .then(() => {
    app
      .listen(PORT, () => {
        console.log(`server is running ${BASE_URL}:${PORT}`);
      })
      .on("error", () => {
        process.exit();
      });
  })
  // error
  .catch(() => {
    process.exit();
  });
