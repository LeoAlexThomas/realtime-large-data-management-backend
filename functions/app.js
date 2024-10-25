const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const serverless = require("serverless-http");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.listen(port, () => {
  console.log("Server is running, listening on port ", port);
});

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
