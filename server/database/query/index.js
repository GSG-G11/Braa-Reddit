const getUserByEmail = require("./getUserByEmailQuery");
const postUserQuery = require("./postUserQuery");
const addpostQuery = require("./addpostQuery");
const getpostQuery = require("./getpostQuery");
const getUserByname = require("./getUsernameQuery");
const getuserpostQuery = require('./getUserPostQuery')

module.exports = {
  getUserByEmail,
  postUserQuery,
  addpostQuery,
  getpostQuery,
  getUserByname,
  getuserpostQuery
};
