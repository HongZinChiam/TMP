import "./ProductBacklog.css"
import TaskCard from "./TaskCard"
import { useState } from "react"
import TaskEditor from "./TaskEditor"

function ProductBacklog() {

    const [showEditor, setShowEditor] = useState(false)
    
    return (
        <div className="container">
            {
                !showEditor
                ? (
                    <section className="backlog">
                        <h2>Product Backlog</h2>
                        <div className="tasks">
                            <TaskCard />
                            <TaskCard />
                        </div>
                        <button className="add" onClick={() => setShowEditor(prevShowEditor => !prevShowEditor)}>
                            <i className="fa-solid fa-plus"></i>
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
