const Psycho = require("../Schema/schemaPsycho");

async function addPsycho(req, res) {
  try {
    const newPsychos = req.body;
    for (let rep = 0; rep < newPsychos.length; rep++) {
      const newPsycho = new Psycho(newPsychos[rep]);
      const psychoObject = await newPsycho.save();
    }
    return res.status(200).json({
      text: "Succès"
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = addPsycho;
