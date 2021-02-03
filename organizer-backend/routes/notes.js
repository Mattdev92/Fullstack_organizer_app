//Importing libraries and js files
const express = require('express');
const Notes = require('../models/note');
const router = express.Router();

//Creating routes 

//Getting all Notes FROM Database
router.get('/',async (req,res)=>{
    try{
        const notes = await Notes.find()
        res.json(notes)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

//Creating note and saving to database
router.post('/',async (req,res)=>{
    const note = new Notes({
        title: req.body.title,
        note: req.body.note,
        category: req.body.category,
    }) 

    try{
        const newNote = await note.save();
        res.status(201).json(newNote)
    }catch(err){
        res.status(400).json({message:err.message})
    }

})
//Getting specific note

router.get('/:noteId',async(req,res)=>{
   const note= await Notes.findById(req.params.noteId)
try{
    res.json(note)
}catch(err){
res.json({message: err})
}
})
//Removing specific note

router.delete('/:noteId',async(req,res)=>{
    const removedNote =await Notes.remove({_id: req.params.noteId});
try{
   res.json(removedNote);
}catch(err){
res.json({message: err})
}
})
//Updating specific note

router.patch('/:noteId',async(req,res)=>{
    const updatedNote =await Notes.updateOne({_id: req.params.noteId},{note:req.body.note});
try{
   res.json(updatedNote);
}catch(err){
res.json({message: err})
}
})

//Exporting routes
module.exports=router;
