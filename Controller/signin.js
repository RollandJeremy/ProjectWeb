const User = require("../Schema/schemaAuthentification.js");
const passwordHash = require("password-hash");

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      text: "Des champs n'ont pas été spécifiés"
    });
  }
  try {
    const find = await User.findOne({ username });
    if (!find) {
      return res
        .status(400)
        .json("L'utilisateur ou le mot de passe est incorrect");
    }
    if (!find.authentification(password)) {
      return res
        .status(400)
        .json("L'utilisateur ou le mot de passe est incorrect");
    }
    return res.status(200).json({ text: "Succes", pass: find.pass() });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

module.exports = login;
