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
server.use("/api/hubs", hubsRouter);

server.get("/", (req, res) => {
  const nameInsert = req.name ? ` ${req.name}` : "";

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

//middleware
function logger(req, res, next) {
  //console long a HTTPmethod request to URLhit
  console.log(`a ${req.method} request to ${req.url}`);

  next();
}

module.exports = server;
