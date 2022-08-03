import React, { useState } from 'react';
import './App.css';
import LoanTermInput from './components/radios';
import LoanAmount from './components/loan-amount';


function UpdateValue() {

  return (
    <>
    </>
  )

}

function App() {

  const [loanTerm, setLoanTerm] = useState(24);

  return (
    <section className="App h-screen flex flex-col items-center mx-auto py-10 bg-slate-200">
      <h1 className='text-4xl mb-4'>Fee calculator</h1>
      <div className='flex w-auto rounded-lg bg-white drop-shadow-lg px-8 py-3'>
        <div className='flex flex-col'>
          <h2 className='text-xl mt-2 mb-6'>Loan Amount</h2>
          <LoanAmount />
        </div>
        <LoanTermInput value={loanTerm} handleChange={setLoanTerm} />
        <input type="button" value="Calculate" onClick="" className="rounded-md bg-indigo-500 cursor-pointer hover:bg-indigo-600 text-white px-6 py-2 my-16" />
      </div>
    </section>
  );
  
}

export default App;
