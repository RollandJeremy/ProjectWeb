const User = require("../Schema/schemaAuthentification.js");
const passwordHash = require("password-hash");

async function signup(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      text: "Des champs n'ont pas été spécifiés"
    });
  }
  const user = {
    username,
    password: passwordHash.generate(password)
  };
  try {
    const find = await User.findOne({
      username
    });
    if (find) {
      return res.status(400).json({
        text: "Votre compte existe déjà"
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {
    const dbUser = new User(user);
    const userObj = await dbUser.save();
    return res.status(200).json({
      text: "Succès",
      pass: userObj.pass()
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = signup;
