import React from "react";

const TaskItem = ({ task, onDelete, onToggleComplete, onEdit }) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <div>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
        <small>Due: {task.dueDate}</small>
      </div>
      <div>
        <button className="edit" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <button className="complete" onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
