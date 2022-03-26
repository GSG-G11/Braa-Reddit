const connection = require('../config/connection')

const getpostQuery = () => {
    const sql = {
      text: "SELECT posts.id,posts.title, posts.content, users.userName FROM posts JOIN users ON (posts.user_id = users.id) ;",
      values: [],
    };
    return connection.query(sql);
  };

  module.exports=getpostQuery



