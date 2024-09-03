import { useState } from "react"
import "./TaskEditor.css"

function TaskEditor() {
    
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const [storyPoints, setStoryPoints] = useState(0);
    const [priorityRating, setPriorityRating] = useState('');
    const [tags, setTags] = useState('');

    const [assign, setAssign] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [taskStages, setTaskStages] = useState('');

    return (
        <form>
            <section>
                <label for="taskName">Task Name</label>
                <input 
                    id="taskName"
                    className="taskName blue input"
                    type="text"
                    required
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                />
            </section>
            
            <section>
                <label for="description">Description</label>
                <textarea
                    id="description"
                    className="description blue input"
                    required
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                >
                </textarea>
            </section>


            <section class="column">
                <div>
                    <label for="storyPoints">Story Points</label>
                    <input 
                        id="storyPoints"
                        className="blue input column-input"
                        type="number"
                        required
                        value={storyPoints}
                        onChange={e => setStoryPoints(e.target.value)}
                    />
                </div>
                <div>
                    <label for="priorityRating">Priority Rating</label>
                    <select
                        id="priorityRating"
                        className="yellow input column-input"
                        required
                        value={priorityRating}
                        onChange={e => setPriorityRating(e.target.value)}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="important">Important</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div>
                <div>
                    <label for="tags">Tags</label>
                    <select
                        id="tags"
                        className="yellow input column-input"
                        required
                        value={tags}
                        onChange={e => setTags(e.target.value)}
                    >
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="api">API</option>
                        <option value="database">Database</option>
                        <option value="framework">Framework</option>
                        <option value="testing">Testing</option>
                        <option value="ui">UI</option>
                        <option value="ux">UX</option>
                    </select>
                </div>
            </section>

            <section class="column">
                <div>
                    <label for="assign">Assign</label>
                    <select
                        id="assign"
                        className="blue input column-input"
                        required
                        value={assign}
                        onChange={e => setAssign(e.target.value)}
                    >
                    </select>
                </div>
                <div>
                    <label for="taskStatus">Task Status</label>
                    <select
                        id="taskStatus"
                        className="blue input column-input"
                        required
                        value={taskStatus}
                        onChange={e => setTaskStatus(e.target.value)}
                    >
                        <option value="notStarted">Not Started</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div>
                    <label for="taskStages">Task Stages</label>
                    <select
                        id="taskStages"
                        className="blue input column-input"
                        required
                        value={taskStages}
                        onChange={e => setTaskStages(e.target.value)}
                    >
                        <option value="planning">Planning</option>
                        <option value="development">Development</option>
                        <option value="integration">Integration</option>
                        <option value="testing">Testing</option>
                    </select>
                </div>
            </section>

            <section>
                <button className="save">Save</button>
            </section>
        </form>
    )
}

export default TaskEditor
