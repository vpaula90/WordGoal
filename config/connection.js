// Require mysql
var mysql = require("mysql");

// Set up our connection information - setting up this info once we got live on heroku so we can get the databa info for that




var connection = mysql.createConnection({
  host: "j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "c83aqbes3iaawya1",
  password: "u1ewq3cuiqiks4no",
  database: "aue2liw6l49ub79x"
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


