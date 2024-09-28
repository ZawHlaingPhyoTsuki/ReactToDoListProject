import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";

import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Finish JavaScript Cash Register App", isDone: true },
    { id: 2, task: "Study for 'Creative Thinking' Class Exam", isDone: false },
    { id: 3, task: "Set Up VirtualBox for Arch Linux", isDone: false },
    {
      id: 4,
      task: "Research Marketing Strategies for Cybercafe",
      isDone: false,
    },
    {
      id: 5,
      task: "Work on Pokémon Search App (freeCodeCamp Project)",
      isDone: false,
    },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => { 
    setTasks(tasks.map((el) => el.id === id ? {...el, isDone: !el.isDone} : el))
  }

  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks} />
    </div>
  );
};

export default App;
