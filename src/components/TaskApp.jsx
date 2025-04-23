import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const TaskApp = (props) => {

  return (
    <div className="flex flex-row justify-between items-center bg-[#9ebeff] mx-auto my-1 py-2 px-4 rounded w-lg">
      <input type="checkbox" />
      <span className="pSmall px-4">{props.dataTask}</span>
      <button className="btnDel">
        <span>
          <AiOutlineDelete />
        </span>
      </button>
    </div>
  );
};

export default TaskApp;
