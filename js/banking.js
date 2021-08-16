// handle deposite button
document.getElementById("deposite-button").addEventListener("click",function(){
//    get the amount deposite
    const depositeInput = document.getElementById("deposite-input");
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    
    const depositeTotal = document.getElementById("deposite-total");
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText); 
    const newDepositeTotal = previousDepositeAmount+depositeAmount;
   depositeTotal.innerText = newDepositeTotal;
   //    update account balance 
   const balanceTotal = document.getElementById("balance-total");
   const balanceTotalText = balanceTotal.innerText; 
   
   const previousBalanceTotal = parseFloat(balanceTotalText);
   const newBalanceTotal = previousBalanceTotal + depositeAmount;
   balanceTotal.innerText = newBalanceTotal;


   //    crear the deposite input field
   depositeInput.value = "";
   
   
});
document.getElementById("withwraw-button").addEventListener("click",function(){
    const withdrawInput = document.getElementById("withwraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);
    // set withdraw  total
    const withdrawTotal = document.getElementById("withwraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const total = balanceTotalAmount-newWithdrawAmount;
    balanceTotal.innerText = total;
    // clear withdraw input 
    withdrawInput.value = "";
})