import express from 'express'
import { getPBTasks, getPBTask, createPBTask } from './database.js'
import cors from 'cors'

const app = express()
app.use(express.json())


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    credentials: true
}));

app.post("/tasks", async (req, res) => {
    const { taskName, 
        description, 
        storyPoints, 
        priorityRating, 
        tags,
        assign,
        taskStatus,
        taskStage } = req.body
    const task = await createPBTask(taskName, 
        description, 
        storyPoints, 
        priorityRating, 
        tags,
        assign,
        taskStatus,
        taskStage)
    res.send(task)
})

app.get("/tasks", async (req, res) => {
    const tasks = await getPBTasks()
    res.send(tasks)
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})