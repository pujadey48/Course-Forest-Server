const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;

const courses = require('./data/courses.json');

app.get("/", (req,res)=> {
    res.send("Server is running")
})

app.get('/allCourses',(req, res) =>{
    res.send(courses);
});

app.get('/courses/:id',(req, res) =>{
    const id = req.params.id;
    const course = courses.find(n => n._id === id);
    if(course){
        res.send(course);
    } else {
        res.send({err_msg:"No data found with id : " + id});
    }
});

app.listen(Port,()=>{
    console.log('server is running', Port);
});
