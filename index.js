function estimateTransactionFee() {
  const amountStr = window.prompt("How much are you sending?");
  const amount = parseInt(500);

  if (isNaN(amount)) {
    console.log("Invalid amount.");
    return;
  }

  console.log("Transaction fee is estimated to be: " + (amount * 0.01) + " units.");
}
calculateTransactionFee(500);
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510





