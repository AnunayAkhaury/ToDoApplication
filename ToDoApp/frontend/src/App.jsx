import './App.css'
import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskEvent from './components/TaskEvent'
const axios = require('axios');


const App = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  const getAllTasks = async () => {
    try {
      const response = await axios.get('https://localhost:7290/api/todo')
      setTasks(response.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  const onToggle = async taskId => {
    try {
      await axios.put(`https://localhost:7290/api/todo/mark/${taskId}`)
      getAllTasks()
    } catch (err) {
      setError(err.message)
    }
  }

  const onDelete = async taskId => {
    try {
      await axios.delete(`https://localhost:7290/api/todo/${taskId}`)
      getAllTasks()
    } catch (error) {
      setError(error.message)
    }
  }

  const addTask = async task => {
    try {
      await axios.post('https://localhost:7290/api/todo', task)
      getAllTasks()
      setIsFormVisible(false)
    } catch (error) {
      setError(error.message)
    }
  }

  const updateTask = async (task, taskId) => {
    try {
      await axios.put(`https://localhost:7290/api/todo/${taskId}`, task)
      getAllTasks()
      setIsFormVisible(false)
    } catch (error) {
      setError(error.message)
    }
  }

  const openUpdateForm = task => {
    setCurrentTask(task)
    setIsFormVisible(true)
  }

  if (loading) {
    return <p>Temp Loading Screen</p>
  }

  if (error) {
    return <p>Error has occurred with request Error: {error}</p>
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Task List</h1>
      <button
        className='fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
        onClick={() => {
          setCurrentTask(null)
          setIsFormVisible(true)
        }}
      >
        Add Task
      </button>

      {isFormVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <TaskForm
              addTask={addTask}
              updateTask={updateTask}
              currentTask={currentTask}
              setIsFormVisible={setIsFormVisible}
            />
            <button
              className='mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700'
              onClick={() => setIsFormVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className='space-y-4 mt-4'>
        {tasks.map(task => (
          <TaskEvent
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={openUpdateForm}
          />
        ))}
      </div>
    </div>
  )
}

export default App
