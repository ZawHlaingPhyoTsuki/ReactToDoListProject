import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [createJob, setJob] = useState("");
  const handleOnChange = (event) => {
    setJob(event.target.value);

  }
  const handleAddTaskBtn = () => {
    const newTask = {
      id: Date.now(),
      task: createJob,
      isDone: false,
    }

    addTask(newTask)
    setJob("")
  }

  return (
    <div className="flex mb-5">
      <input
        type="text"
        onChange={handleOnChange}
        value={createJob}
        placeholder="Write your new task"
        className="flex-grow bg-slate-100 border-2 border-slate-200 p-2 rounded-l-lg"
      />
      <button onClick={handleAddTaskBtn} className="bg-slate-300 border-2 border-slate-200 py-2 px-4 rounded-r-lg">
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
