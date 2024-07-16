import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => (
  <li className={task.completed ? 'completed' : ''}>
    <span onClick={() => toggleComplete(task.id)}>{task.name}</span>
    <button onClick={() => editTask(task)}>Edit</button>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </li>
);

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TaskItem;
