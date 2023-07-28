const express = require('express');
const router = express.Router();
const Note = require('../models/Notes')
router.post('/', (req, res) => {
   // TODO: Add multiple notes at once
   // TODO: Search if user already exists
   console.log(req.body);
   const note = Note(req.body);
   res.send("Note Created");
   note.save();
});

module.exports = router;
