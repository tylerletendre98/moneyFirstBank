import React from "react";
import AccountsToBeApproved from "../../components/accountsToBeApproved/AccountsToBeApproved";
import UsersToBeApproved from "../../components/usersToBeApproved/UsersToBeApproved";
import { ReactSpinner } from "react-spinning-wheel";

function AdminPage(props) {
  console.log(props);

  if (props.admin === undefined) {
    return (
      <div>
        <ReactSpinner />
      </div>
    );
  } else if (
    props.admin.usersToBeApproved.length !== 0 &&
    props.admin.accountsToBeApproved.length !== 0
  ) {
    return (
      <div>
        <div>
          <UsersToBeApproved
            usersToBeApproved={props.admin.usersToBeApproved}
            approveUser={props.approveUser}
          />
        </div>
        <div>
          <AccountsToBeApproved
            accountsToBeApproved={props.admin.accountsToBeApproved}
          />
        </div>
      </div>
    );
  } else if (
    props.admin.usersToBeApproved.length !== 0 &&
    props.admin.accountsToBeApproved.length === 0
  ) {
    return (
      <div>
        <div>
          <div>
            <UsersToBeApproved
              usersToBeApproved={props.admin.usersToBeApproved}
              approveUser={props.approveUser}
            />
          </div>
          <div>
            <h3>There are no accounts to be approved</h3>
          </div>
        </div>
      </div>
    );
  } else if (
    props.admin.usersToBeApproved.length === 0 &&
    props.admin.accountsToBeApproved.length !== 0
  ) {
    return (
      <div>
        <div>
          <AccountsToBeApproved
            accountsToBeApproved={props.admin.accountsToBeApproved}
          />
        </div>
        <div>
          <h3>There are no users to be approved</h3>
        </div>
      </div>
    );
  }
}
export default AdminPage;
