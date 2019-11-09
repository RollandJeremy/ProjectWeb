const Psycho = require("../Schema/schemaPsycho");

async function getAllPsycho(req, res) {
  try {
    Psycho.find(function(err, psycho) {
      if (err) {
        return res.status(500).json({ err });
      } else {
        return res.status(200).json(psycho);
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = getAllPsycho;
