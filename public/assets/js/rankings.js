var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/rankings", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.students.findAll({}).then(function(dbStud) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbStud);
    });
  });

    // POST route for saving a new todo
    app.post("/api/rankings", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.students.create({
          text: req.body.text,
          complete: req.body.complete
        }).then(function(dbStud) {
          // We have access to the new todo as an argument inside of the callback function
          res.json(dbStud);
        });
      });
      console.log(dbStud);