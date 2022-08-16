import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import ChooseTermLength from "../../components/chooseTermLength/ChooseTermLength";
import './applyLoansPage.css'

function ApplyLoansPage(props) {
  const [loanType, setLoanType] = useState();
  const [downPayment, setDownPayment] = useState();
  const [requestingAmount, setRequestingAmount] = useState();
  const [termLength, setTermLength] = useState();

  const handleSubmit = () => {
    const newLoanRequest = {
      type: loanType,
      downPayment: downPayment,
      requestedAmount: requestingAmount,
      termLength: parseInt(termLength),
    };
    props.createLoanRequest(newLoanRequest);
  };

  return (
    <div className="application-container">
      <div>
        <h2>Fill out your information below</h2>
      </div>
      <div className="loan-application-container">
        <div>
          <div>
          <label htmlFor="">What type of loan are you applying for:</label>

          </div>
          <div>
            <select
              name=""
              id=""
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
            >
              <option value="null">please select one</option>
              <option value="Auto">Auto</option>
              <option value="Mortgage">Mortgage</option>
              <option value="Personal">Personal</option>
            </select>

          </div>
        </div>
        <div>
          <div>
          <label htmlFor="">How much are you applying for:</label>
      
          </div>
          <div>
          <input
            type="number"
            placeholder="Exp: 45000"
            value={requestingAmount}
            onChange={(e) => setRequestingAmount(e.target.value)}
          />

          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">Do you want to make a downpayment Note: if no leave section blank :</label>
          </div>
          <div>
            <input
              type="number"
              name=""
              id=""
              placeholder="Exp: 15000"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </div>
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
          <Link to="/profilePage">
            <button onClick={() => handleSubmit()}>Apply for loan</button>
            <button>Cancel loan application</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApplyLoansPage;
