import React from "react";
import BtnApp from "./BtnApp";
import InputApp from "./InputApp";

const TaskApp = (props) => {
  return (
    <div className="flex flex-col w-80">
      <h4 className="text-center">{props.taskTitle}</h4>
      <InputApp placeholder="new task" />
      <BtnApp btnText="save" />
    </div>
  );
};

export default TaskApp;
