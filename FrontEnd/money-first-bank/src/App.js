import { useState } from "react";
import Header from "./components/header/Header";
import { Routes, Route} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import ApplyLoansPage from "./pages/applyLoansPage/ApplyLoansPage";
import "./App.css";
import axios from "axios";
import TransactionsPage from "./pages/transactionsPage/TransactionsPage";
import AdminPage from "./pages/adminPage/AdminPage";
import AdminLogin from "./components/adminLogin/AdminLogin";


function App() {
  const [loggedInUser, setLoggedInUser] = useState()
  const [responseMessage, setResponseMessage] = useState();
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [creatingNewUser, setCreatingNewUser] = useState(false);
  const [usersTransactions, setUsersTransactions] = useState();
  const [transferingFunds, setTransferingFunds] = useState(false);
  const [depositngMoney, setDepositingMoney] = useState(false);
  const [withdrawingMoney, setWithdrawingMoney] = useState(false)
  const [makingLoanPayment, setMakingLoanPayment] = useState(false)
  const [transferingFundsUsertoUser, setTransferingFundsUserToUser] = useState(false)
  const [admin, setAdmin] = useState()
  const [numberOfUsers, setNumberOfUsers]= useState()
  const [bankBalance, setBankBalance] =useState()
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggingInAdmin, setLoggingInAdmin] = useState(false);
  

  const loginUser = (loggingInUser)=>{
    axios.post('http://localhost:5000/api/users/loginUser', loggingInUser)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((err)=>{
      setResponseMessage(err.response.data)
    })
  }

  const loginAdmin = (adminInfo) =>{
    console.log(responseMessage)
    axios.post('http://localhost:5000/api/admin/loginAdmin', adminInfo)
    .then((res)=>{
      setAdmin(res.data)
    })
    .catch((err)=>{
      setResponseMessage(err.response.data)
    })
  }
  
   const getBankBalance = ()=>{
    axios.get('http://localhost:5000/api/admin/getBanksBalance').then((res)=> setBankBalance(res.data.bankBalance))
   }

  const getNumberOfUsers=()=>{
    axios.get('http://localhost:5000/api/users/getUsers')
    .then((res)=>{
      setNumberOfUsers(res.data.length)
     })
  }

  const addAccount =(newAccountInfo)=>{
    axios.post(`http://localhost:5000/api/accounts/newAccount/${loggedInUser._id}`, newAccountInfo)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((error)=>{
      alert(error.response.data)
    })
  } 

  const createNewUser=(newUserInfo)=>{
    axios.post('http://localhost:5000/api/users/newUser',newUserInfo)
    .then((res)=>{
      setLoggedInUser(res.data)
      console.log(loggedInUser)
    })
  }

  const createLoanRequest =(loansRequestInfo)=>{
    axios.post(`http://localhost:5000/api/loans/newLoanRequest/${loggedInUser._id}`,loansRequestInfo)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((err)=>{
      alert(err.response.data)
    })
  }

  const approveLoan = (loanId)=>{
    axios.put(`http://localhost:5000/api/admin/approveLoanRequest/${loanId}`)
    .then((res)=>{
      setAdmin(res.data)
    })
  }

  const denyLoan = (loanId) =>{
    axios.put(`http://localhost:5000/api/admin/denyLoanRequest/${loanId}`)
    .then((res)=>{
      setAdmin(res.data)
    })
  }

  const makeLoanPayment = (loanId, accountId, loanPayment) =>{
    axios.put(`http://localhost:5000/api/loans/makeLoanPayment/${loggedInUser._id}/${accountId}/${loanId}`, loanPayment)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((err)=>{
      alert(err.response.data)
    })
  }

  const depositMoney = (accountId,depositMoney)=>{
    axios.put(`http://localhost:5000/api/accounts/depositMoney/${loggedInUser._id}/${accountId}`,depositMoney)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
  }

  const withdrawlMoney = (accountId,withdrawlRequest)=>{
    axios.put(`http://localhost:5000/api/accounts/withdrawMoney/${loggedInUser._id}/${accountId}`,withdrawlRequest)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((res)=>{
      alert(res.response.data)
    }
    )
  }

  const transferFunds = (givingAccountId, recievingAccountId, transferingAmount)=>{
    axios.put(`http://localhost:5000/api/accounts/transferFunds/${loggedInUser._id}/${givingAccountId}/${recievingAccountId}`, transferingAmount)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((res)=>{
      alert(res.response.data)
    })
  }

  const transferFundsUserToUser = (givingAccountId, recievingAccountId, transferingAmount, usersFullname)=>{
    axios.put(`http://localhost:5000/api/accounts/transferToUser/${loggedInUser._id}/${givingAccountId}/${recievingAccountId}`, {transferingAmount, usersFullname})
    .then((res)=>{
      setLoggedInUser(res.data)
    })
    .catch((res)=>{
      alert(res.response.data)
    })
  }

  const approveUser = (userId) =>{
    axios.put(`http://localhost:5000/api/admin/approveUser/${userId}`)
    .then((res)=>{
      setAdmin(res.data)
    }
    )
  }

  const denyUser = (userId)=>{
    axios.put(`http://localhost:5000/api/admin/denyUser/${userId}`)
    .then((res)=>{
      setAdmin(res.data)
    }
    )
  }

  const approveAccount = (accountId)=>{
    axios.put(`http://localhost:5000/api/admin/approveAccount/${accountId}`)
    .then((res)=>{
      setAdmin(res.data)
    })
  }

  const denyAccount = (accountId)=>{
    axios.put(`http://localhost:5000/api/admin/denyAccount/${accountId}`)
    .then((res)=>{
      setAdmin(res.data)
    })
  }

  return (
    <div className="App">
      <div>
        <Header loggingIn={loggingIn} loggingInAdmin={loggingInAdmin} setLoggingIn={setLoggingIn}
        setLoggingInAdmin={setLoggingInAdmin} admin={admin} setAdmin={setAdmin} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setCreatingNewUser={setCreatingNewUser} creatingNewUser={creatingNewUser} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginPage" element={<LoginPage loginUser={loginUser} setCreatingNewUser={setCreatingNewUser} creatingNewUser={creatingNewUser} createNewUser={createNewUser} loggingIn={loggingIn} setLoggingIn={setLoggingIn} />} />
          <Route path="/profilePage" element={<ProfilePage loggedInUser={loggedInUser} responseMessage={responseMessage} creatingAccount={creatingAccount}
          setCreatingAccount={setCreatingAccount} addAccount={addAccount} depositMoney={depositMoney} withdrawlMoney={withdrawlMoney} setUsersTransactions={setUsersTransactions}
          transferingFunds={transferingFunds} setTransferingFunds={setTransferingFunds} transferFunds={transferFunds} depositingMoney={depositngMoney} setDepositingMoney={setDepositingMoney}
          withdrawingMoney={withdrawingMoney} setWithdrawingMoney={setWithdrawingMoney} transferingFundsUserToUser={transferingFundsUsertoUser}setTransferingFundsUserToUser={setTransferingFundsUserToUser}
          transferFundsUserToUser={transferFundsUserToUser} makeLoanPayment={makeLoanPayment} makingLoanPayment={makingLoanPayment} setMakingLoanPayment={setMakingLoanPayment}/>}/>
          <Route path="/transactionsPage" element={<TransactionsPage usersTransactions={usersTransactions} setUsersTransactions={setUsersTransactions}/>}/>
          <Route path="/adminPage" element={<AdminPage admin={admin} denyLoan={denyLoan} approveLoan={approveLoan}bankBalance={bankBalance} getBankBalance={getBankBalance} numberOfUsers={numberOfUsers} approveUser={approveUser} denyUser={denyUser} approveAccount={approveAccount} denyAccount={denyAccount} getNumberOfUsers={getNumberOfUsers} responseMessage={responseMessage}/>}/>
          <Route path="/adminLogin" element={<AdminLogin loginAdmin={loginAdmin} loggingInAdmin={loggingInAdmin} setLoggingInAdmin={setLoggingInAdmin}/>}/>
          <Route path="/applyLoanPage" element={<ApplyLoansPage createLoanRequest={createLoanRequest}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
