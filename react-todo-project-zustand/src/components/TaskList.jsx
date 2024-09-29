import React from "react";
import Task from "./Task";
import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
  const { tasks } = useTaskStore();

  return (
    <div>
      <h3 className="font-bold font-serif mb-3 text-xl">
        Task List (Total {tasks.length}, Done{" "}
        {tasks.filter((el) => el.isDone).length})
      </h3>
      {tasks.map((el) => (
        <Task key={el.id } job={el} />
      ))}
    </div>
  );
};

export default TaskList;
