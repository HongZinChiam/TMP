import "./ProductBacklog.css"
import TaskCard from "./TaskCard"
import { useState } from "react"
import TaskEditor from "./TaskEditor"

function ProductBacklog() {

    const [showEditor, setShowEditor] = useState(false)
    
    return (
        <div class="container">
            {
                !showEditor
                ? (
                    <section class="backlog">
                        <h2>Product Backlog</h2>
                        <div class="tasks">
                            <TaskCard />
                            <TaskCard />
                        </div>
                        <button class="add" onClick={() => setShowEditor(prevShowEditor => !prevShowEditor)}>
                            <i class="fa-solid fa-plus"></i>
                            <p>Add</p>
                        </button>
                    </section>
                )
                : <TaskEditor />
            }
        </div>
    )
}

export default ProductBacklog
