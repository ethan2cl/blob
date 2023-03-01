import nextApp, { handle } from "./lib/nextApp";
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
    app.all("*", (req, res) => handle(req, res));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  })
  // router setting
  .then(() => {
    router = express.Router();
    app.use(globalConfig.BASE_URL, router);
    router.use("/api", apiRouter);
  })
  // listen
  .then(() => {
    app
      .listen(PORT, () => {
        console.log(`server is running  ${BASE_URL}:${PORT}`);
      })
      .on("error", () => {
        process.exit();
      });
  })
  // error
  .catch(() => {
    process.exit();
  });
