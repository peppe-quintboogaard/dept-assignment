const express = require("express");
const mocker = require("connect-api-mocker");

const port = 9000;
const app = express();

app.use("/api", mocker("server"));

console.log(`API is running on server port ${port}.`);
app.listen(port);
