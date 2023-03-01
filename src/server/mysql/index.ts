import mysql, { Pool } from "mysql2";
import config from "./config.json";

let db = (() => {
  let pool: Pool | undefined;
  if (!pool) {
    pool = mysql.createPool(config);
    pool.query("select 1", (err, result) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`database ${config.database} connect successfully`, result);
    });
  }
  return pool;
})();

export default db;
