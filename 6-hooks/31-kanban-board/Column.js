import React from "react";
import Task from "./Task";

export default function Column ({ title, tasks }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map(function(task) {
        <Task key={task.id} task={task} />
      })}
    </div>
  );
}