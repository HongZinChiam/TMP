import "./ProductBacklog.css"
import TaskCard from "./TaskCard"

function ProductBacklog() {
    return (
        <div class="container">
            <section class="backlog">
                <h2>Product Backlog</h2>
                <div class="tasks">
                    <TaskCard />
                    <TaskCard />
                </div>
            </section>
        </div>
    )
}

export default ProductBacklog
