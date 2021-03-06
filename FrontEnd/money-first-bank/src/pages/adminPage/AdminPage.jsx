import React, { useEffect } from "react";
import AccountsToBeApproved from "../../components/accountsToBeApproved/AccountsToBeApproved";
import UsersToBeApproved from "../../components/usersToBeApproved/UsersToBeApproved";
import { ReactSpinner } from "react-spinning-wheel";
import AdminSideBar from "../../components/adminSideBar/AdminSideBar";
import "./adminPage.css";

function AdminPage(props) {
  useEffect(() => {
    props.getNumberOfUsers();
    props.getBankBalance();
    console.log(props);
  }, [props]);

  if (props.admin === undefined || props.numberOfUsers === undefined) {
    return (
      <div>
        <ReactSpinner />
      </div>
    );
  } else {
    return (
      <div className="adminPage-container">
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
