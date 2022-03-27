const connection = require("../config/connection");

const getUserByname = (id) => {
  return connection.query({
    text: "select username from users where id = $1 ;",
    values: [id],
  });
};

module.exports = getUserByname;
