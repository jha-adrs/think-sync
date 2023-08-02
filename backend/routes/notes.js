const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');
const User = require('../models/User');
const fetchUser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get all the notes
router.get('/fetchallnotes', fetchUser, async (req, res) => {
   const notes = await Note.find({ user: req.user.id });
   res.json(notes);

});
// ROUTE 2: Create a note, login required
router.post('/addnote', fetchUser, [
   body('title', 'Enter a valid title').isLength({ min: 3 }),
   body('title', 'Simialr title already exists').custom(async (value, { req }) => {
      //checks for duplicate titles
      try {
         const existingNote = await Note.findOne({ title: value, user: req.user.id });
         if (existingNote) {
            throw new Error('A note with same title already exists, try a different one');
         }
         return true;

      } catch (error) {
         throw new Error('A note with same title already exists, try a different one');
      }
   }),
   body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
      try {
         const { title, description, tag } = req.body;

         // If there are errors, return Bad request and the errors
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
         }
         const note = new Note({
            title, description, tag, user: req.user.id
         })
         const savedNote = await note.save()

         res.json(savedNote)

      } catch (error) {
         res.status(500).send("Internal Server Error");
      }
   });

// ROUTE 3: Updating an existing note "/api/notes/updatenote"
router.put('/updatenote/:id', fetchUser, async (req, res) => {
   const { title, description, tag } = req.body;
   const newNote = {};
   if (title) { newNote.title = title };
   if (description) { newNote.description = description };
   if (tag) { newNote.tag = tag };
   // First check if note and user match
   // Find the note to be updated and update it
   const fetchedNote = await Note.findById(req.params.id);
   if (!fetchedNote) { return res.status(404).send("Not Found"); }
   if (fetchedNote.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
   }
   note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
   res.send(newNote);
});

// ROUTE 4: Delete an existing note "api/notes/deletenote"
router.delete('/deletenote/:id', fetchUser, async(req,res)=>{
   try{
      const fetchedNote = await Note.findById(req.params.id);
   if (!fetchedNote) { return res.status(404).send("Could not find note"); }
   if (fetchedNote.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
   }
   note = await Note.findByIdAndDelete(req.params.id)
   res.send({message:"Success, note deleted", note: fetchedNote});
   }
   catch(error){
      res.status(500).send('Internal Server Error');
   }
});


// TODO: Fetch a specific note only
module.exports = router;


/*
router.post('/addnote', fetchUser, [
   body('title','Title must be between 5 and 20 characters')
      .isLength({ min: 5, max: 20 }),
   body('title').custom(async (req,res)=>{
         // No duplicate titles allowed
         const fetchedNote = await Note.findOne({title:req.body.title, user:req.user.id});
         console.log("Note: "+fetchedNote+"");
         if(!fetchedNote){
            throw new Error("Note with similar title already exists");
         }
      }),
   body('description','Description must be between 8 and 30 characters')
      .isLength({ min: 8, max: 30 }),
], async (req, res) => {
   try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         res.status(400).json({ errors: errors.message });
      }
      
      const { title, description, tag } = req.body;
      const note = await new Note({
         title, description, tag, user: req.user.id
      });
      const savedNote = await note.save();
      
      res.json(savedNote);
   } catch (error) {
      res.status(500).send({errors:"Internal Server Error", details:{name: error.name,message: error.message, stack: error.stack}});
   }
});
 */