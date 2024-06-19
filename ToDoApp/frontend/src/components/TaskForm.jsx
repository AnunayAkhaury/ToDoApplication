import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const TaskForm = ({ addTask, updateTask, currentTask, setIsFormVisible }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (currentTask) {
      setValue('taskName', currentTask.taskName);
      setValue('taskDescription', currentTask.taskDescription);
    }
  }, [currentTask, setValue]);

  const onSubmit = (data) => {
    const taskData = {
      taskName: data.taskName,
      taskDescription: data.taskDescription,
      isCompleted: currentTask ? currentTask.isCompleted : false,
    };

    if (currentTask) {
      updateTask(taskData, currentTask.id);
    } else {
      addTask(taskData);
    }
    reset();
    setIsFormVisible(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="taskName" className="block text-sm font-medium text-gray-700">
          Task Name:
        </label>
        <input
          id="taskName"
          name="taskName"
          type="text"
          {...register('taskName', { required: true })}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700">
          Task Description:
        </label>
        <input
          id="taskDescription"
          name="taskDescription"
          type="text"
          {...register('taskDescription', { required: true })}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {currentTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
