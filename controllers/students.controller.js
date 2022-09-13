const Student = require('../models/Student.model')

module.exports.studentsController = {
  getStudents: async(req, res) => {
    try{
      const students = await Student.find({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,  
      });
      res.json(students);
    } catch(e) {
      res.json(e)
    }
  },
  postStudents: async (req, res) => {
    try{
      const students = await Student.create({
       name: req.body.name,
       phone: req.body.phone,
       age: req.body.age, 
      });
      res.json(students);
    } catch(e) {
      res.json(e.message);
    }
  },


  deleteStudents: async (req, res) => {
    try {
      const students = await Student.findByIdAndRemove(req.params.id, {
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age,
      });
      res.json(students)
    } catch(e) {
      res.json(e)
    }
  },

  patchStudents: async (req,res) => {
    try {
      const students = await Student.findByIdAndUpdate( req.params.id, {
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age,
      });
      res.json(students);
    } catch(e) {
      res.json(e)
    }
  }
}