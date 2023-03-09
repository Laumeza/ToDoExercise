const { Router } = require('express');
const { createToDo, getToDoByUsers } = require ('../controllers/post.controllers')


const router = Router();

router.post('/api/v1/todo', createToDo)
router.get('/api/v1/todo/:userId', getToDoByUsers );


module.exports = router;