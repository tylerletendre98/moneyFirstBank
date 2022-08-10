import { useState } from "react";
import React from "react";
import ChooseTermLength from "../../components/chooseTermLength/ChooseTermLength";

function ApplyLoansPage(props) {
  const [loanType, setLoanType] = useState();
  const [downPayment, setDownPayment] = useState();
  const [requestingAmount, setRequestingAmount] = useState();
  const [termLength, setTermLength] = useState();

  const handleSubmit = () => {
    const newLoanRequest = {
      loanType: loanType,
      downPayment: downPayment,
      requestingAmount: requestingAmount,
      termLength: parseInt(termLength),
    };
    console.log(newLoanRequest);
  };

  return (
    <div>
      <div>
        <h2>Fill out your information below</h2>
      </div>
      <div>
        <div>
          <label htmlFor="">What type of loan are you applying for:</label>
          <select
            name=""
            id=""
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
          >
            <option value="">please select one</option>
            <option value="auto">Auto</option>
            <option value="mortgage">Mortgage</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Do you want to make a downpayment:</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="Exp: 15000"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">How much are you applying for:</label>
          <input
            type="number"
            placeholder="Exp: 45000"
            value={requestingAmount}
            onChange={(e) => setRequestingAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Select a term length: </label>
          <ChooseTermLength
            type={loanType}
            termLength={termLength}
            setTermLength={setTermLength}
          />
        </div>
        <div>
          <button onClick={() => handleSubmit()}>Apply for loan</button>
        </div>
      </div>
    </div>
  );
}

export default ApplyLoansPage;
