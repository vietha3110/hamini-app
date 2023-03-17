import './index.css';
import TaskForm from './TaskForm';
import { useState } from 'react';


const HomePage = () => {
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [checked, setChecked] = useState({});
    const btnClick = () => {
        setShowTaskForm(!showTaskForm);
    }
    const currTasks = JSON.parse(localStorage.getItem("tasks"));
    const handleChange = (i)=> () => {
        console.log(i);
        const newCheck = {
            ...checked,
            [i]: !checked[i]
        };
        setChecked(newCheck);
    }
    return (
        <div className="homepage">
            <div className="homepage-title">
                <h1>
                   Hello Ha!
                </h1>
            </div>
            <div className='homepage-creation'>
                <button onClick={btnClick}>New Task</button>
                {
                    showTaskForm && 
                    <TaskForm onClose={() => setShowTaskForm(false)} />
                }
            </div>
            <div className='homepage-lists'>
                <div className='homepage-lists-title'>
                    <h1>
                         Todo List
                    </h1>
                </div>
                {
                    currTasks?.length > 0 && currTasks.map((task, i) => (
                        <div key={task.taskName} className="homepage-lists-detail">
                            <span className='task-name'>{task.taskName}</span>
                            <span className='task-priority'>{task.priority}</span>
                            <input
                                type='checkbox'
                                onChange={handleChange(i)}
                                id={checked[i] ? "task-done":"task-notdone"}
                            />
                        </div>
                    ))
                
                }
            </div>
        </div>
    )
}

export default HomePage;
