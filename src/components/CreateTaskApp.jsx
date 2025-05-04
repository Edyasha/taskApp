import React, { useState } from "react";
import BtnApp from "./BtnApp";
import InputApp from "./InputApp";

import useStore from "../../store";

const CreateTaskApp = (props) => {
  const [text, setText] = useState("");
  const addTasks = useStore((state) => state.addTasks);

  const enteredData = (data) => {
    setText(data);
  };

  const addTask = () => {
    addTasks({ text: text });
    setText("");
  };

  return (
    <div className="flex flex-col w-80">
      <h4 className="text-center my-2">{props.taskTitle}</h4>
      <InputApp
        onChange={enteredData}
        value={text}
        type="text"
        placeholder="new task"
      />
      <BtnApp onClick={addTask} btnText="save" />
    </div>
  );
};

export default CreateTaskApp;
