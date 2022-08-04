import React from "react";
import TextInput from "./text-input";
import Slider from "./range-slider";

// Make sure input amount is tracked/ shared between both slider and num field
const LoanAmount = ({ value, handleChange }) => {
    return (
    <>
        <TextInput value={value} handleChange={(value) => handleChange(value)} type={'number'} placeholder={"Enter an amount"} min={1000} max={20000}/>
        <Slider value={value} handleChange={(value) => handleChange(value)}  step={100} min={1000} max={20000} />

        <h3>£{value}</h3>

    </>
    )
}

export default LoanAmount;