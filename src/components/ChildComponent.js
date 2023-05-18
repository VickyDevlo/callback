import React from "react";

const ChildComponent = ({ getBgColor, bgColor }) => {
  // this function used to pass data to parent component.
  const getData = (e) => {
    const { value } = e.target;
    getBgColor(value);
  };

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <input type="text" value={bgColor} onChange={getData} />
    </div>
  );
};

export default ChildComponent;
