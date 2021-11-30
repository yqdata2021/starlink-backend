const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/satelliteList", (req, res) => {
  const url = "https://api.n2yo.com" + req.query.url;
  //   console.log(url);
  axios.get(url).then((response) => {
    // console.log(response.data);
    res.json(response.data);
  });
});

app.get("/positions", (req, res) => {
  const url = "https://api.n2yo.com" + req.query.url;
  //   console.log(url);
  axios.get(url).then((response) => {
    // console.log(response.data);
    res.json(response.data);
  });
});

app.listen(3001);
