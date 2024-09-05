import "./TaskCard.css"

function TaskCard() {
    return (
        <section className="task-card">
            <p>Draw a cat</p>
            <div className="task-info">
                <p className="info story-point">7</p>
                <p className="info priority-rating">Medium</p>
                <p className="info tag">Front End</p>
            </div>
        </section>
    )
}

export default TaskCard