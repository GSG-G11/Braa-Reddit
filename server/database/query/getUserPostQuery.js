const connection = require("../config/connection");

const getuserpostQuery = (userID) => {
  return connection.query({
    text: "select * from posts where id = $1 ;",
    values: [userID],
  });
};

module.exports = getuserpostQuery;
