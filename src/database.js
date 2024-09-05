import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE
}).promise()

export async function getPBTasks() {
    const [rows] = await pool.query("SELECT * FROM product_backlog_tasks")
    console.log(rows)
}

export async function getPBTask(id) {
    const [rows] = await pool.query(`
        SELECT *
        FROM product_backlog_tasks
        WHERE id = ?
    `, [id])
    return rows[0]
}

export async function createPBTask(
    taskName, 
    description, 
    storyPoints, 
    priorityRating, 
    tags,
    assign,
    taskStatus,
    taskStage
) {
    const result = await pool.query(`
        INSERT INTO product_backlog_tasks (
        taskName, 
        description, 
        storyPoints, 
        priorityRating, 
        tags,
        assign,
        taskStatus,
        taskStage
    )
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?)
    `, [
        taskName, 
        description, 
        storyPoints, 
        priorityRating, 
        tags,
        assign,
        taskStatus,
        taskStage
    ])
    const id = result.insertId
    return getPBTask(id)
}


const result = await createPBTask('Create a table', 'Create a table with HTML', 5, 'Urgent', 'Frontend', 'None', 'Active', 'Development')
console.log(result)
