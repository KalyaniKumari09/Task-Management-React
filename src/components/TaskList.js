import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggleComplete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
