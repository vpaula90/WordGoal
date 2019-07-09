// Require mysql
var mysql = require("mysql");

// Set up our connection information - setting up this info once we got live on heroku so we can get the databa info for that



// Changed to my local database
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "MySql!23",
  database: "wordgoal_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;