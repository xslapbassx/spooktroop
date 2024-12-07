const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb+srv://michaelthomasfrancis:rjt6z0G7VVjzr0SP@cluster0.alu8q.mongodb.net/stories", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log("Error connecting to MongoDB", err);
    });
    
//create a data schema
const storiesSchema = {
    title: String,
    content: String
};

const Story = mongoose.model("Story", storiesSchema);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public"))
});


app.post("/", function(req, res) {

    let newStory = new Story({
        title: req.body.title,
        content: req.body.content
    });
    newStory.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.error("Error saving story", err);
            res.status(500).send("There was an error saving your story.");
        });
    
});

app.listen(3000, function() {
    console.log("server is running on 3000");
});
