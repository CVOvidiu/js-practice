import express from "express";
import cors from "cors";
import { postItem, getItems, updateItem, deleteItem } from "./crud.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/items", (_, res) => {
  getItems((e, rows) => {
    if (e) res.status(500).send(e.message);
    else res.status(200).json(rows);
  });
});

app.post("/items", (req, res) => {
  const { name, description } = req.body;
  postItem(name, description, (e, data) => {
    if (e) res.status(500).send(e.message);
    else res.status(201).send(`Item is added ${data.id}`);
  });
});

app.listen(3000, () => {
  console.log("Recipe API online");
});
