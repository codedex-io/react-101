// Kanban Board 📋
// Codédex

import React from "react";
import Column from "./Column";
import { createContext, useContext, useState, useEffect } from "react";
import "./styles.css";

export const BoardContext = createContext();

const TaskBoardProvider = function() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "todo" },
    { id: 3, title: "Task 3", status: "todo" },
  ]);

  const moveTask = function(taskId, newStatus) {
    const updatedTasks = tasks.map(function(task) {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  useEffect(function() {
    const doneTasks = document.querySelectorAll(".task[data-status='done']");
    doneTasks.forEach(function(taskElement) {
      taskElement.style.backgroundColor = "#dbf3c9";
    });
  }, [tasks]);

  return (
    <BoardContext.Provider value={{ tasks, moveTask }}>
      <Board />
    </BoardContext.Provider>
  );
};

const Board = function() {
  const { tasks } = useContext(BoardContext);

  return (
    <div className="board">
      <Column title="To Do 🪄" tasks={tasks.filter(function(task) {
        return task.status === "todo"
      })} />
      <Column title="In Progress 🚀" tasks={tasks.filter(function(task) {
        return task.status === "inProgress"
      })} />
      <Column title="Done 🌟" tasks={tasks.filter(function(task) {
        return task.status === "done"
      })} />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <TaskBoardProvider />
    </div>
  );
}
