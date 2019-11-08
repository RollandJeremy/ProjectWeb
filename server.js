const mongoose = require("mongoose");
const express = require("express");
const signup = require("./Controller/signup.js");
const getPsycho = require("./Controller/getAllPsycho");
const addPsycho = require("./Controller/addPsycho");
const signin = require("./Controller/signin");
const scanf = require("scanf");

console.log("username: ");
var username = scanf("%s");
console.log("\npassword: ");
var mdp = scanf("%s");

mongoose.connect(
  `mongodb+srv://${username}:${mdp}@projet-irq5t.azure.mongodb.net/db?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true },
  err => {
    if (err) {
      console.log(
        `Error while connecting to the MongoDB database: ${err.message}`
      );
    } else {
      console.log("Connected successfully to the MongoDB database");
    }
  }
);

const app = express();
app.use(express.json());

app.get("/data/getAll", getPsycho);
app.post("/user/signup", signup);
app.post("/data/add", addPsycho);
app.post("/user/signin", signin);
app.listen(4000, () => {
  console.log("Server is running in port 4000");
});
