const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

router.get('/', async (_, res) => {
  const addedTodos = parseInt(await getAsync('added_todos')) || 0
  res.json({ added_todos: addedTodos });
});

module.exports = router;