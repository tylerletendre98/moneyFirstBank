import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AccountsToBeApproved from "../../components/accountsToBeApproved/AccountsToBeApproved";
import UsersToBeApproved from "../../components/usersToBeApproved/UsersToBeApproved";
import DisplayLoanRequests from "../../components/displayLoanRequests/DisplayLoanRequests";
import { ReactSpinner } from "react-spinning-wheel";
import AdminSideBar from "../../components/adminSideBar/AdminSideBar";
import "./adminPage.css";

function AdminPage(props) {
  useEffect(() => {
    props.getNumberOfUsers();
    props.getBankBalance();
  }, [props]);

  if (props.admin === undefined) {
    return (
      <div>
        <div className="invalid-login">
          <div>
            <ReactSpinner />
          </div>
          <div>
            <h4>{props.responseMessage}</h4>
          </div>
          <div className="login-button-container">
            <Link to="/adminLogin">
              <button>Try again</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="adminPage-container">
        <div>
          <div className="approval-container">
            <div className="approve-container">
              <div>
                <h2>Users to be approved</h2>
              </div>
              <div className="approve-component">
                <UsersToBeApproved
                  usersToBeApproved={props.admin.usersToBeApproved}
                  approveUser={props.approveUser}
                  denyUser={props.denyUser}
                />
              </div>
            </div>
            <div className="approve-container">
              <div>
                <h2>Accounts to be approved</h2>
              </div>
              <div className="approve-component">
                <AccountsToBeApproved
                  accountsToBeApproved={props.admin.accountsToBeApproved}
                  approveAccount={props.approveAccount}
                  denyAccount={props.denyAccount}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Loan Requests</h2>
            </div>
            <div className="loans-approve-component">
              <DisplayLoanRequests
                loansToBeApproved={props.admin.loansToBeApproved}
              />
            </div>
          </div>
        </div>
        <div className="sidebar-container">
          <AdminSideBar
            numberOfUsers={props.numberOfUsers}
            bankBalance={props.bankBalance}
          />
        </div>
      </div>
    );
  }
}
export default AdminPage;
