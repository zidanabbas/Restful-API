const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

const { getAllUsers, createNewUser, updateUser, deleteUser } = UserController;
// read-get
router.get("/users", getAllUsers);
// create-post
router.post("/users", createNewUser);
// update-put
router.patch("/users/:idUser", updateUser);
// delete
router.delete("/users/:idUser", deleteUser);

module.exports = router;
