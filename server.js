const express = require("express"); // importing a CommonJS module
const morgan = require("morgan");
const helmet = require("helmet");

const hubsRouter = require("./hubs/hubs-router.js");
const server = express();

//Global middleware
server.use(express.json());
// server.use(morgan("dev"));
server.use(helmet());
server.use(logger);

//local middleware
// server.use("/api/hubs", hubsRouter);
server.use("/api/hubs", checkPass("allgood"), hubsRouter);

//example login point
server.post("/login", (req, res) => {
  const creds = req.body;

  //validate checking against database
  res.status(200).json({ token: "allgood" });
});

server.get("/", (req, res) => {
  const nameInsert = req.name ? ` ${req.name}` : "";

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

//middleware
function logger(req, res, next) {
  const name = req.headers.name;
  req.name = name;

  //console log a name, HTTPmethod request to URLhit
  console.log(`${req.name} a ${req.method} request to ${req.url}`);

  next();
}

//function returns middleware function
function checkPass(password) {
  return function (req, res, next) {
    if (req.headers.authorization === password) {
      next();
    } else {
      res.status(401).json({ you: "can not pass" });
    }
  };
}

module.exports = server;
