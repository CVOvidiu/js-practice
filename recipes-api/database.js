import sqlite3 from "sqlite3";

sqlite3.verbose();

const dbName = "database.db";

export let db = new sqlite3.Database(dbName, (e) => {
  if (e) console.log(e.message);
  else {
    console.log("Connected to database");
    db.run(
      "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)",
      (e) => {
        if (e) console.log(e.message);
        else console.log("Table created or existed");
      }
    );
  }
});
