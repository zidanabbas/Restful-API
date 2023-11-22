const usersModels = require("../models/users");

const getAllUsers = async (req, res) => {
  const { getAllUsers } = usersModels;
  try {
    const [data] = await getAllUsers();
    res.status(200).json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { createNewUser } = usersModels;
  const { body } = req;

  if (!body.name || !body.email || !body.address) {
    return res.status(400).json({
      message: "Name, Email, and Adresss is required",
      data: null,
    });
  }

  try {
    await createNewUser(body);
    res.status(201).json({
      message: "CREATE new users success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { updateUser } = usersModels;
  const { idUser } = req.params;
  const { body } = req;
  try {
    await updateUser(body, idUser);
    res.status(201).json({
      message: "UPDATE users success",
      data: {
        idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      MessageServer: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  const { deleteUser } = usersModels;

  try {
    await deleteUser(idUser);
    res.status(200).json({
      message: "DELETE users success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
