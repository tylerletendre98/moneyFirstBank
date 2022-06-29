import React, { useEffect } from "react";
import AccountsToBeApproved from "../../components/accountsToBeApproved/AccountsToBeApproved";
import UsersToBeApproved from "../../components/usersToBeApproved/UsersToBeApproved";
import { ReactSpinner } from "react-spinning-wheel";
import { useState } from "react";

function AdminPage(props) {
  const [amountOfMoneyInBank, setAmountOfMoneyInBank] = useState();

  useEffect(() => {
    props.getNumberOfUsers();
    props.getBankBalance();
  }, [props.numberOfUsers, props.bankBalance]);

  console.log(props.bankBalance);

  if (props.admin === undefined || props.numberOfUsers === undefined) {
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
          <div>
            <UsersToBeApproved
              usersToBeApproved={props.admin.usersToBeApproved}
              approveUser={props.approveUser}
              denyUser={props.denyUser}
            />
          </div>
          <div>
            <AccountsToBeApproved
              accountsToBeApproved={props.admin.accountsToBeApproved}
              approveAccount={props.approveAccount}
              denyAccount={props.denyAccount}
            />
          </div>
        </div>
        <div>
          <div>
            <h3>{props.numberOfUsers}</h3>
          </div>
          <div>
            <h3>{props.bankBalance}</h3>
          </div>
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
              denyUser={props.denyUser}
            />
          </div>
          <div>
            <h3>There are no accounts to be approved</h3>
          </div>
        </div>
        <div>
          <div>
            <h3>{props.numberOfUsers}</h3>
          </div>
          <div>
            <h3>{props.bankBalance}</h3>
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
          <div>
            <AccountsToBeApproved
              accountsToBeApproved={props.admin.accountsToBeApproved}
              approveAccount={props.approveAccount}
              denyAccount={props.denyAccount}
            />
          </div>
          <div>
            <h3>There are no users to be approved</h3>
          </div>
        </div>
        <div>
          <div>
            <h3>{props.numberOfUsers}</h3>
          </div>
          <div>
            <h3>{props.bankBalance}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h3>There are no accounts needed to be approved</h3>
        </div>
        <div>
          <h3>There are no users needed to be approved</h3>
        </div>
        <div>
          <div>
            <h3>{props.numberOfUsers}</h3>
          </div>
          <div>
            <h3>{props.bankBalance}</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminPage;
