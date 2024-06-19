import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import TaskForm from './components/TaskForm'


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks,task])
  };

  return (
    <div>
      <h1>ToDo Application</h1>
      <TaskForm addTask = {addTask} />
      <u1>
        {tasks.map((task,index) => (
            <li key={index}>{task}</li>
        ))}
      </u1>
    </div>
  );
}

export default App;
