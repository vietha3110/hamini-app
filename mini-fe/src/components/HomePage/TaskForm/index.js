import { useState } from "react";
import './index.css';

const TaskForm = ({onClose}) => {
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('low');
    const [time, setTime] = useState('');
    const [nameErr, setNameErr] = useState('');

    const priorityList = [
        { value: 'low', text: 'Low' },
        { value: 'normal', text: 'Normal' },
        { value: 'high', text: 'High' }, 
        { value: 'critical', text: 'Critical'}
    ]

    const clickCancel = () => {
        onClose();
    }
    
    const createNewTask = () => {
        console.log(typeof time);
        setNameErr('');
        if (taskName.trim() === "" || taskName.length > 255) {
            return setNameErr("Name must be 1 - 255 characters.");
        }
        if (localStorage.getItem("tasks")) {
            const tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks.push({ taskName: taskName, priority: priority });
            localStorage.setItem("tasks",JSON.stringify(tasks));
            onClose();
        } else {
            localStorage.setItem("tasks", JSON.stringify([{ taskName: taskName, priority: priority }]));
            onClose();
        }
    }
    return (
        <div className="tasks-form">
            <div className="tasks-form-name">
                <label>Task name: </label>
                <input
                    type='text'
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                    required
                />
                { nameErr && 
                    <div className="tasks-err">
                        <span>{nameErr}</span>
                    </div>
                }
            </div>
            <div className="tasks-form-priority">
                <label>Priority: </label>
                <select onChange={e => setPriority(e.target.value)}>
                    {
                        priorityList.map(ele => (
                            <option key={ele.value} value={ele.value}>
                                {ele.text}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="tasks-form-priority">
                <label>Due time</label>
                <input
                    type='date'
                    value={time}
                    onChange={e => setTime(e.target.value)}
                />
            </div>
            <div className="tasks-form-button">
                <button className="btn-create" onClick={createNewTask}>Create</button>
                <button className="btn-close" onClick={clickCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default TaskForm;
