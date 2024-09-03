CREATE DATABASE taskmanagerpro;
USE taskmanagerpro;

CREATE TABLE product_backlog_tasks (
    id integer PRIMARY KEY AUTO_INCREMENT,
    taskName VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    storyPoints integer NOT NULL,
    priorityRating VARCHAR(255) NOT NULL,
    tags VARCHAR(255) NOT NULL,
    assign VARCHAR(255) NOT NULL,
    taskStatus VARCHAR(255) NOT NULL,
    taskStage VARCHAR(255) NOT NULL
);

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
('Create a table', 'Create a table with HTML', 5, 'Urgent', 'Frontend', 'None', 'Active', 'Development'),
('Create a button', 'Create a button with HTML', 3, 'Medium', 'Frontend', 'None', 'Not Started', 'Planning');