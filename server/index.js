const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 8000;
require("dotenv").config();

const uri = process.env.URI;

app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {
    await client.close();
  }
});
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
