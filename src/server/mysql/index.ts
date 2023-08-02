import mysql, { Pool } from "mysql2";
import config from "./config.json";
let dbPool: Pool;

dbPool = mysql.createPool(config);
dbPool.query("select 1", (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(`database ${config.database} connect successfully`, result);
});

export default dbPool;
