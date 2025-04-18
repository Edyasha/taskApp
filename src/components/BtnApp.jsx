import React from "react";

const BtnApp = (props) => {
  return (
    <>
      <button className="btn mx-auto">
        <span className="">{props.btnText}</span>
      </button>
    </>
  );
};

export default BtnApp;
