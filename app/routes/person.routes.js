module.exports = app => {
    const persons = require("../controllers/person.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Person
    router.post("/", persons.create);
  
    // Retrieve all Persons
    router.get("/", persons.findAllPublished);
  
    app.use('/api/persons', router);
  };