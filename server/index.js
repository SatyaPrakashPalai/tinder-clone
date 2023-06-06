const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const app = express();

const port = 8000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = process.env.URI;

app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  const { token, email, userId } = req.body;
  console.log(req.body);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(202).send("User already exists. Please login");
    }
    const data = {
      user_id: userId,
      email: email,
    };
    const insertedUser = await users.insertOne(data);

    res.status(201).json({ email: email });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
});

app.get("/gendered-users", async (req, res) => {
  const client = new MongoClient(uri);
  const gender = req.query.gender;
  console.log("gender", gender);
  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const query = { gender_identity: { $eq: gender } };
    const foundUsers = await users.find(query).toArray();

    res.send(foundUsers);
  } finally {
    await client.close();
  }
});

app.put("/users", async (req, res) => {
  const client = new MongoClient(uri);
  const formData = req.body.formData;

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const query = { user_id: formData.user_id };
    const updateDocument = {
      $set: {
        first_name: formData.first_name,
        dov_day: formData.dob_day,
        dob_month: formData.dob_month,
        dob_year: formData.dob_year,
        show_gender: formData.show_gender,
        gender_identity: formData.gender_identity,
        gender_interest: formData.gender_interest,
        url: formData.url,
        about: formData.about,
        matches: formData.matches,
      },
    };
    const insertedUser = await users.updateOne(query, updateDocument);
    res.send(insertedUser);
  } catch {
    (eroor) => {
      console.log(error);
    };
  } finally {
    await client.close();
  }
});

app.get("/user", async (req, res) => {
  const client = new MongoClient(uri);
  const userId = req.query.userId;
  console.log("user", userId);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const query = { user_id: userId };
    const user = await users.findOne(query);

    res.send(user);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
