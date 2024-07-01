
const db = require("../router/db-config");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.json({
      status: "error",
      error: "please enter email and password",
    });
  else {
    db.query(
      "SELECT * FROM users WHERE email =?",
      [email],
      async (Err, result) => {
        if (Err) throw Err;
        if (
          !result.length ||
          !(await bcrypt.compare(password, result[0].password))
        )
          return res.json({
            status: "error",
            error: "Incorrect email or password",
          });
        else {
          return res.json({
            status: "success",
            success: "User has been logged In",
          });
        }
      }
    );
  }
};
module.exports = login;