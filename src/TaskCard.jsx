import "./TaskCard.css"

function TaskCard() {
    return (
        <section class="task-card">
            <p>Draw a cat</p>
            <div class="task-info">
                <p class="info story-point">7</p>
                <p class="info priority-rating">Medium</p>
                <p class="info tag">Front End</p>
            </div>
        </section>
    )
}

export default TaskCard