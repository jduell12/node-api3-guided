const Hubs = require("./hubs-model");

module.exports = (req, res, next) => {
  //check hub is in database
  //if it is continue
  //if not respond with 404
  Hubs.findById(req.params.id)
    .then((hub) => {
      if (hub) {
        next();
      } else {
        res.status(404).json({ message: "middleware not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

//async

// module.exports = async (req, res, next) => {
//   //check hub is in database
//   //if it is continue
//   //if not respond with 404
//   try {
//     const hub = await Hubs.findById(req.params.id);

//     if (hub) {
//       next();
//     } else {
//       res.status(404).json({ message: "middleware not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
