const express = require('express');
const cors = require('cors');
const app = express();

//CRUD apis -> CREATE, READ, UPDATE, AND DELETE

app.use(cors());
app.use(express.json());

// all tasks stored in memory
let tasks = [];

app.post('/addTask', (req, res) => {
    console.log('Inside Post /addTask API', req.body);
    const task = {
        text: req.body.text,
        id: req.body.id,
    }
    tasks.push(task);
    console.log(tasks);
    res.status(200).json(task);
});

app.get('/getTask', (req, res) => {
    console.log('Inside Get /getTask API', tasks);
    res.json(tasks);
})

// PUT AND PATCH 
// 
app.patch('/updateTask/:id', (req, res) => {
    console.log('Inside Update /updateTask API', req.params);
    const id = Number(req.params.id);
    const modifiedText = req.body.updatedTask;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].text = modifiedText;
            break;
        }
    }
    res.status(200).json({ message: "successfully updated a task" });
})

const port = 3000;
app.listen(port, () => {
    console.log(`server is running in port ${port}`);
})

