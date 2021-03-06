const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

const now = new Date();
const newDate = addDays(now, 100);

const date = newDate.getDate();
const month = newDate.getMonth();
const year = newDate.getFullYear();

const formattedDate = date + "-" + month + "-" + year;

app.get("/", (request, response) => {
  response.send(formattedDate);
});

app.listen(3000);
module.exports = app;
