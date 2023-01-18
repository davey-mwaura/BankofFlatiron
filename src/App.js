import './App.css';
import TransactionForm from './Inputs';
import React, {useEffect, useState} from 'react'


function App() {


const [transactions, setTransactions] = useState([])

useEffect(()=>{  fetch("http://localhost:4000/transactions")
  .then((r) => r.json())
  .then((data) => {setTransactions(data)
})
 }, [] )

// --------------------------------------------------------------------------------------------------------------------------------
const [searchTerm, setSearchTerm] = useState('');

const filteredTransactions = transactions.filter((transaction) => {
  return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
});


let transactionList = filteredTransactions.map((transaction) => (
  

  <tr key={transaction.id}>
  <td>{transaction.date}</td>
  <td>{transaction.description}</td>
  <td>{transaction.category}</td>
  <td>{transaction.amount}</td>
  </tr>
  
   ));

  return (
    <div className="App">
      <h1>The Royal Bank of Flatiron</h1>

      <TransactionForm />

      <h2>Transaction List</h2>

      <input type="text" className="search-bar" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search by Description" />


      <div className='result'>


 <table>
 
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {transactionList}
    </tbody>
 
  </table>


        </div>

      </div>
  );
}

export default App;
