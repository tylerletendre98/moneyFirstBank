import React from "react";
import DisplayLoans from "../displayLoans/DisplayLoans";

function Loans(props) {
  return (
    <div className="loans-container">
      <DisplayLoans activeLoans={props.activeLoans} />
    </div>
  );
}

export default Loans;
