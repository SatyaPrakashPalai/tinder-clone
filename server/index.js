const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 8000;

const uri =
  "mongodb+srv://sp8368755:fHiYKdkLeafKo1Y1@satyaserver.nvezmsf.mongodb.net/app-data?retryWrites=true&w=majority";

app.listen(port, () => {
  console.log("Server is listening to the port " + port);
});
