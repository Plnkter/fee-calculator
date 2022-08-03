import React, { useState } from "react";
import TextInput from "./text-input";
import Slider from "./range-slider";


const LoanAmount = () => {

	const [loanAmount, setLoanAmount] = useState(4800);

    function validate() {
        if ( loanAmount < Slider.min ) {
            setLoanAmount(Slider.min);
        } else if ( loanAmount > Slider.max ) {
            setLoanAmount(Slider.max);
        }
    }

    const handleBlur = (e) => setLoanAmount(e.target.value);
    console.log(loanAmount);

    return (
    <>
        <TextInput value={loanAmount} handleChange={(amount) => setLoanAmount(amount)} onBlur={handleBlur} type={'number'} placeholder={"Enter an amount"} min={1000} max={25000}/>
        <Slider value={loanAmount} handleChange={(amount) => setLoanAmount(amount)} step={100} min={1000} max={25000} />
        

            <div>£{loanAmount}</div>

    </>
    )

}

export default LoanAmount;