import React from "react";
import AccountsToBeApproved from "../../components/accountsToBeApproved/AccountsToBeApproved";
import UsersToBeApproved from "../../components/usersToBeApproved/UsersToBeApproved";
import { ReactSpinner } from "react-spinning-wheel";

function AdminPage(props) {
  if (props.admin === undefined) {
    return (
      <div>
        <ReactSpinner />
      </div>
    );
  } else if (
    props.admin.accountsToBeApproved.length &&
    props.admin.usersToBeApproved.length === undefined
  ) {
    return (
      <div>
        <div>
          <h3>There are no accounts needed to be approved</h3>
        </div>
        <div>
          <h3>There are no users needed to be approved</h3>
        </div>
      </div>
    );
  }
  if (props.admin.accountsToBeApproved.length === undefined) {
    return (
      <div>
        <div>
          <h3>There are no accounts needed to be approved</h3>
        </div>
        <div>
          <UsersToBeApproved
            usersToBeApproved={props.admin.usersToBeApproved}
          />
        </div>
      </div>
    );
  } else if (props.admin.usersToBeApproved.length === undefined) {
    return (
      <div>
        <div>
          <AccountsToBeApproved
            accountsToBeApproved={props.admin.accountsToBeApproved}
          />
        </div>
        <div>
          <UsersToBeApproved
            usersToBeApproved={props.admin.usersToBeApproved}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <AccountsToBeApproved
          accountsToBeApproved={props.admin.accountsToBeApproved}
        />
      </div>
      <div>
        <h3>There are no users needed to be approved</h3>
      </div>
    </div>
  );
}

export default AdminPage;
