import feeStructure12 from "./12structure";
import feeStructure24 from "./24structure";

const amountBreakPoint12 = Object.keys(feeStructure12);
const feeBreakPoint12 = Object.values(feeStructure12);

const amountBreakPoint24 = Object.keys(feeStructure24);
const feeBreakPoint24 = Object.values(feeStructure24);

// Iterate through Oject to find nearest upperbound and lowerbound preset
// amount to the input amount
export const LookForBounds = ( inputValue, loanTerm ) => {

    let lowerBoundAmount, upperBoundAmount, lowerBoundFee, upperBoundFee;
    const amountBreakPoints = loanTerm === 12 ? amountBreakPoint12 : amountBreakPoint24;
    const feeBreakPoints = loanTerm === 12 ? feeBreakPoint12 : feeBreakPoint24;

    for (let i = 0; i < amountBreakPoints.length; i++) {
        if (inputValue < amountBreakPoints[i]) {

            upperBoundAmount = amountBreakPoints[i];
            lowerBoundAmount = amountBreakPoints[i-1];
            upperBoundFee = feeBreakPoints[i];
            lowerBoundFee = feeBreakPoints[i-1];

            break;
            
        }
    }

    // Calculate the loan fee around rounded to the nearest 5
    const amountSegment = upperBoundAmount - lowerBoundAmount;
    const feeSegment = upperBoundFee - lowerBoundFee;
    const inputValueSegment = inputValue - lowerBoundAmount;
    
    const inputValuePercentage = inputValueSegment/amountSegment;
    const inputValueFeeSegment = inputValuePercentage * feeSegment;
    const fee = lowerBoundFee + inputValueFeeSegment;

    const roundedFee = Math.round(fee / 5) * 5;

    return roundedFee;
}

