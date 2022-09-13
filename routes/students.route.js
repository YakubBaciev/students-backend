const Router = require ('express');
const router = Router();
const {studentsController} = require ('../controllers/students.controller')

router.get('/students', studentsController.getStudents)

router.post('/students', studentsController.postStudents)
 
router.delete('/students/:id', studentsController.deleteStudents)

router.patch('/students/:id', studentsController.patchStudents)

module.exports = router;