import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/TaskAdd";
import FilterButtons from "./components/ButtonFilter";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    //  Load from localStorage
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  //  Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskToEdit) => {
    const newTitle = prompt("New Title:", taskToEdit.title);
    const newDescription = prompt("New Description:", taskToEdit.description);
    const newDueDate = prompt("New Due Date:", taskToEdit.dueDate);

    if (newTitle && newDescription && newDueDate) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskToEdit.id
            ? {
                ...task,
                title: newTitle,
                description: newDescription,
                dueDate: newDueDate,
              }
            : task
        )
      );
    }
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTaskForm onAdd={addTask} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={editTask}
      />
    </div>
  );
};

export default App;
