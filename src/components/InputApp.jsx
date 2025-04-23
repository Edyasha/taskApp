import React from "react";

const InputApp = (props) => {
  return (
    <>
      <input
        value={props.value}
        type={props.type}
        className="input mb-2 mx-auto w-60"
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)}
      />
    </>
  );
};

export default InputApp;
