const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/stuff", (req, res) => res.send({ response: "Hello world " }));

console.log("REDIS HOST", process.env.REDIS_URL);

const redis = require("redis"),
  client = redis.createClient(process.env.REDIS_URL);

client.on("error", function(err) {
  console.log("Error " + err);
});

client.set("string key", "string val", redis.print);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
