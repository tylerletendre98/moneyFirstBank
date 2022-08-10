import React from "react";

function ChooseTermLength(props) {
  if (props.type === undefined) {
    return (
      <div>
        <p>Please select a loan type first</p>
      </div>
    );
  } else if (props.type === "auto") {
    return (
      <div>
        <select
          name=""
          id=""
          onChange={(e) => {
            props.setTermLength(e.target.value);
          }}
        >
          <option value="">Select one below</option>
          <option value={48}>48 months</option>
          <option value={60}>60 months</option>
          <option value={72}>72 months</option>
        </select>
      </div>
    );
  } else if (props.type === "mortgage") {
    return (
      <div>
        <select
          name=""
          id=""
          onChange={(e) => {
            props.setTermLength(e.target.value);
          }}
        >
          <option value="">Select one below</option>
          <option value={180}>15 years</option>
          <option value={360}>30 years</option>
        </select>
      </div>
    );
  } else if (props.type === "person") {
    <div>
      <select
        name=""
        id=""
        onChange={(e) => {
          props.setTermLength(e.target.value);
        }}
      >
        <option value="">Select one below</option>
        <option value={6}>6 months</option>
        <option value={12}>12 months</option>
        <option value={18}>18 months</option>
      </select>
    </div>;
  }
}

export default ChooseTermLength;
