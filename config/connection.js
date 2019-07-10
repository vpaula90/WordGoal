// Require mysql
var mysql = require("mysql");

// Set up our connection information - setting up this info once we got live on heroku so we can get the databa info for that




var connection = mysql.createConnection({
  host: "k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "jmr9jzoec8vkakow",
  password: "eb5b9i53w9u00ys5",
  database: "h5jo4daodh8fgcgq"
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


