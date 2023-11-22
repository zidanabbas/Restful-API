const dbPool = require("../config/database");

const getAllProjects = () => {
  const SQLQuery = "SELECT * FROM projects";
  return dbPool.execute(SQLQuery);
};

const createNewProject = (body) => {
  const SQLQuery = `INSERT INTO projects (title, description, link, image)
                    VALUES ('${body.title}', '${body.description}', '${body.link}', '${body.image}')`;
  return dbPool.execute(SQLQuery);
};

const updateProject = (body, idProject) => {
  const SQLQuery = `UPDATE projects
                    SET title = '${body.title}', description = '${body.description}', link = '${body.link}', image = '${body.image}'
                    WHERE idProject = ${idProject}`;
  return dbPool.execute(SQLQuery);
};

const deleteProject = (idProject) => {
  const SQLQuery = `DELETE FROM projects
                    WHERE idProject = ${idProject}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllProjects,
  createNewProject,
  updateProject,
  deleteProject,
};
