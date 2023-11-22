const logRequest = (req, res, next) => {
  console.log("Request URL:", req.path);
  next();
};

module.exports = logRequest;
