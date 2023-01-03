const db = require("better-sqlite3")('database.db')

const sql = `CREATE TABLE users (
    uid   INTEGER PRIMARY KEY AUTOINCREMENT,
    name  VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
)`

// db.exec(sql);

const statement = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
statement.run("Thomas", "epost@epost.com")