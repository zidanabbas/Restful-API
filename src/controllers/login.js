const usersModels = require("../models/users");

const loginUsers = async (req, res) => {
  const { createNewUser } = usersModels;
  const { body } = req;
  try {
    await createNewUser(body);
    res.status(200).json({
      message: "login Users Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unauthorized Account",
      serverMessage: error,
    });
  }
};

module.exports = { loginUsers };
