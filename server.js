const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://michaelthomasfrancis:rjt6z0G7VVjzr0SP@cluster0.alu8q.mongodb.net/stories");

//create a data schema
const storiesSchema = {
    title: String,
    content: String
}

const Story = mongoose.model("Story", storiesSchema);

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/submit.html")
})

app.post("/", function(req, res) {
    let newStory = new Story({
        title: req.body.title,
        content: req.body.content
    });
    newStory.save();
    res.redirect('/');
})

app.listen(3000, function() {
    console.log("server is running on 3000");
})
