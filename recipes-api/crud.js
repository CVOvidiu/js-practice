import { db } from "./database.js";

export const postItem = (name, description, callback) => {
  const sql = "INSERT INTO items (name, description) VALUES (?, ?)";
  db.run(sql, [name, description], function (e) {
    callback(e, { id: this.lastID });
  });
};

export const getItems = (callback) => {
  const sql = "SELECT * FROM items";
  db.all(sql, [], callback);
};

export const updateItem = (id, name, description, callback) => {
  const sql = "UPDATE items SET name = ?, description = ? WHERE id = ?";
  db.run(sql, [name, description, id], callback);
};

export const deleteItem = (id, callback) => {
  const sql = "DELETE FROM items WHERE id = ?";
  db.run(sql, id, callback);
};
