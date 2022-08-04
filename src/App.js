import React, { useState } from 'react';
import './App.css';
import LoanTermInput from './components/loan-term';
import LoanAmount from './components/loan-amount';
import { CalculateFee } from './calculation/CalculateFee';
import { ModalResult } from './components/modal';

function App() {

  const [loanTerm, setLoanTerm] = useState(24);
	const [loanAmount, setLoanAmount] = useState(5000);
  const [showModal, setShowModal] = useState(false);

  /* const DisplayTermAndFee = () => {
    if (loanTerm === 12) {
      CalculateFee12(loanAmount);
    } else if (loanTerm === 24) {
      CalculateFee24(loanAmount);
    }
  } */

  let finalAnswer = CalculateFee(Number(loanAmount), Number(loanTerm));

  const roundedLoanAmount = Math.round (loanAmount / 5 ) * 5;

  // Validate if the input amount is between the given range 
  const ValidateLoanAmount = () => {
      if (loanAmount < 1000 || loanAmount > 20000) {
        return "Invaid loan amount, please enter an amount between £1000 to £25000.";

      } else {
        return "Loan fee to borrow £"+[roundedLoanAmount]+" over "+[loanTerm]+" months time is £"+ finalAnswer;
      }
  }

  const Calculate = () => {
      CalculateFee(Number(loanAmount), Number(loanTerm));
      ModalResult(setShowModal(true));
  }

  return (
    <section className="App h-screen flex flex-col items-center mx-auto py-10 bg-slate-200">
      <h1 className='text-4xl mb-4'>Fee calculator</h1>
      <div className='flex w-auto rounded-lg bg-white drop-shadow-lg px-8 py-3'>
        
        <div className='flex flex-col'>
          <h2 className='text-xl mt-2 mb-6'>Loan Amount</h2>
          <LoanAmount value={loanAmount} handleChange={(value) => setLoanAmount(Number(value))} />
        </div>

        <LoanTermInput value={loanTerm} handleChange={setLoanTerm} />

        <input type="button" value="Calculate" 
        onClick={() => Calculate()}
        className="rounded-md bg-indigo-500 cursor-pointer hover:bg-indigo-600 text-white px-6 py-2 my-16" />

      </div>

      <ModalResult 
      isOpen={showModal} 
      onClose={() => setShowModal(false)} 
      bodyText={ ValidateLoanAmount() }
      />

    </section>
  );
  
}

export default App;
