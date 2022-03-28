const serverError = (err, req, res, next) => {
  const internalServerError =
    '<p style="font-size: 10vh; text-align: center;">500!</p>';
  console.log(err);
  if (err.status) {
    res.status(err.status).json({ status: err.status, message: err.message });
  } else {
    res.status(500).json({ status: 500, message: "SERVER ERROR" });
  }
};

module.exports = serverError;
