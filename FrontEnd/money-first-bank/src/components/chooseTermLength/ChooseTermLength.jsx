import React from "react";

function ChooseTermLength(props) {
  console.log(props.type)
  if (props.type === "null") {
    return (
    <div>

    </div>
    );
  } else if (props.type === "Auto") {
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
  } else if (props.type === "Mortgage") {
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
  } else if (props.type === "Personal") {
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
          <option value={6}>6 months</option>
          <option value={12}>12 months</option>
          <option value={18}>18 months</option>
        </select>
      </div>
    );
  }
}

export default ChooseTermLength;
