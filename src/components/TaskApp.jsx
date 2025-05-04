import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import useStore from "../../store";

const TaskApp = (props) => {
  const toggleTasks = useStore((state) => state.toggleTasks);

  return (
    <div className="flex flex-row justify-between items-center bg-[#c0d5ff] mx-auto my-1 py-2 px-4 rounded w-lg">
      <input
        type="checkbox"
        checked={props.status}
        onChange={() => toggleTasks(props.id)}
      />
      <div className="flex flex-col items-center">
        <span className="pSmall px-4 py-0.5">{props.dataTask}</span>
        <span className="pLeast px-4 py-0.5">creation date: {props.createdTime}</span>
      </div>
      <button
        className="btnDel"
        disabled={!props.status}
        onClick={props.deleteTasks}
      >
        <span>
          <AiOutlineDelete />
        </span>
      </button>
    </div>
  );
};

export default TaskApp;
