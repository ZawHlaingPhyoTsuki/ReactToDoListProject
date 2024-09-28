import React from "react";

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const handleRemoveTask = () => {
    removeTask(id);
  };

  const handleDoneTask = () => {
    doneTask(id);
  }

  return (
    <div className="flex justify-between  items-center border-2 border-slate-200 p-3 rounded-lg mb-3">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="size-4" onChange={handleDoneTask} checked={isDone} />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
      <button
        onClick={handleRemoveTask}
        className="bg-red-100 text-red-700 border-2 border-red-300 py-2 px-4 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
