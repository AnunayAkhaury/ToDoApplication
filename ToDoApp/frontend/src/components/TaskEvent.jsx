import React from 'react'

const TaskEvent = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div className='p-4 mb-4 bg-white rounded-lg shadow-md flex justify-between items-center'>
      <div>
        <h2 className='text-xl font-bold mb-2'>{task.taskName}</h2>
        <p className='text-gray-700 mb-2'>{task.taskDescription}</p>
        <p className='text-sm mb-2'>
          Status:{' '}
          <span
            className={task.isCompleted ? 'text-green-600' : 'text-red-600'}
          >
            {task.isCompleted ? 'Complete' : 'Incomplete'}
          </span>
        </p>
      </div>
      <div className='flex space-x-2'>
        <button
          className='ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
          onClick={() => onToggle(task.id)}
        >
          Toggle
        </button>
        <button
          className='ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50'
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className='ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'
          onClick={() => onDelete(task.id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default TaskEvent
