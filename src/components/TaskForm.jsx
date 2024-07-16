import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [task, setTask] = useState(taskToEdit || { name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      taskToEdit ? editTask(task) : addTask(task);
      setTask({ name: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  editTask: PropTypes.func,
  taskToEdit: PropTypes.object,
};

export default TaskForm;
