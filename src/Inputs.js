import React, { useState } from 'react';

function TransactionForm() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);



  function handleSubmit(event) {
    // event.preventDefault();

  const newTransactions = {
    date,
    description,
    category,
    amount
  };

  fetch("http://localhost:4000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTransactions)
  })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);
    // });
    


  }

 
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
