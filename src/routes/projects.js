const express = require("express");
const router = express.Router();
const ProjectsController = require("../controllers/projects");

const { getAllProjects, createNewProject, updateProject, deleteProject } =
  ProjectsController;

// read-get
router.get("/projects", getAllProjects);
// create-post
router.post("/projects", createNewProject);
// update-put
router.patch("/projects/:idProjects", updateProject);
// delete
router.delete("/projects/:idProjects", deleteProject);

module.exports = router;
