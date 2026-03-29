const express = require("express");
const app = express();
app.use(express.json());

/* aim - a basic POST endpoint that lets u send notes to the server, format : "title" and "description"
a GET server that displays all the notes and a DELETE endpoint that lets u delete a note */ 
const notes = [];
app.post('/notes', (req,res) =>{
    notes.push(req.body);
    console.log(req.body);
    res.send("Note added successfully");
})

app.get('/notes', (req,res) =>{
    res.status(200).json({
        "notes" : notes
    })
})



app.listen(3000,()=>{
    console.log("Server is Up");
})

