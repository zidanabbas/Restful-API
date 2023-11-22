const projectModels = require("../models/projects");

const getAllProjects = async (req, res) => {
  const { getAllProjects } = projectModels;

  try {
    const [data] = await getAllProjects();
    res.status(200).json({
      message: "GET all projects success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewProject = async (req, res) => {
  const { createNewProject } = projectModels;
  const { body } = req;
  try {
    await createNewProject(body);
    res.status(201).json({
      message: "CREATE new projects success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateProject = async (req, res) => {
  const { idProjects } = req.params;
  const { updateProject } = projectModels;
  const { body } = req;
  try {
    await updateProject(body, idProjects);
    res.status(201).json({
      message: "UPDATE project success",
      data: {
        idProjects,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteProject = async (req, res) => {
  const { idProjects } = req.params;
  const { deleteProject } = projectModels;
  try {
    await deleteProject(idProjects);
    res.status(200).json({
      message: "DELETE project success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllProjects,
  createNewProject,
  updateProject,
  deleteProject,
};
