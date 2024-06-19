import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const TaskForm = ({ addTask }) => {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
       addTask(data.task);
       reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div> 
                <label htmlFor="task">Task:</label>
                <input
                    id="task"
                    name="task"
                    type="task"
                    {...register('task', { required: true })}
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};
export default TaskForm;













