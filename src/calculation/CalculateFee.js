import feeStructure12 from "./12structure";
import feeStructure24 from "./24structure";
import { LookForBounds } from "./Interpolation";

// Display the loan fee base on if the input amount match one on preset fee structure
// If matched, choose the preset loan fee;
// Else, choose the calculated, interpolated fee
export const CalculateFee = ( inputAmount, loanTerm ) => {

    const ValidateAmountWithTerm = loanTerm === 12 && inputAmount >= 1000 && inputAmount <= 20000;

    if (ValidateAmountWithTerm) {

        return feeStructure12[inputAmount] || LookForBounds(inputAmount, loanTerm) ;

    } else {

        return feeStructure24[inputAmount] || LookForBounds(inputAmount, loanTerm) ;
    }
}
