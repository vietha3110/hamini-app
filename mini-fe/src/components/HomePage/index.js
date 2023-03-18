import './index.css';
import TaskForm from './TaskForm';
import {useEffect, useState } from 'react';
import Calendar from './TaskForm/Calendar';

const HomePage = () => {
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [checked, setChecked] = useState({});
    const [greeting, setGreeting] = useState('Hello');
    useEffect(() => {
        const today = new Date();
        const hour = today.getHours();
        if (hour >= 5 && hour < 12) {
            setGreeting('Good morning');
        } else if (hour >= 12 && hour <= 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }, [])
    
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
                   {greeting}, Ha!
                </h1>
            </div>
            <div className='homepage-creation'>
                {
                    !showTaskForm && 
                    <button onClick={btnClick}>New Task</button>
                }
               
                {
                    showTaskForm && 
                    <TaskForm onClose={() => setShowTaskForm(false)} />
                }
            </div>
            <div className='homepage-lists'>
                <div className='homepage-lists-title'>
                    <h1>
                        Things to do
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
            <div className='homepage-lists'>
                <Calendar/>
            </div>
        </div>
    )
}

export default HomePage;
