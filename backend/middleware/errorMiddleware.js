

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  
  if (err.code && err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate resource detected",
    });
  }


  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: err.message,
    });
  }

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = { errorHandler };
