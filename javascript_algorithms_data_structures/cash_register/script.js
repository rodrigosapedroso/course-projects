let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let currencyUnits = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];

const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const change = document.getElementById("change-due");
const priceValue = document.getElementById("price-value");
const cashInDrawer = document.getElementById("cash-in-drawer");

const getChange = (changeDue, cid) => {

  let totalCashInDrawer = 0;
  for (let i of cid) {
    totalCashInDrawer += i[1]
  }
  totalCashInDrawer = Number(totalCashInDrawer.toFixed(2));
  
  cashInDrawer.innerHTML = `Cash in Drawer: $${totalCashInDrawer}`
  priceValue.innerHTML = `Total: $${price}`
  
  let changeArray = [];
  let remainingChange = changeDue

  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    let unit = currencyUnits[i][0];
    let unitValue = currencyUnits[i][1];
    let unitInDrawer = cid[i][1];
    let amountFromUnit = 0;

    while (remainingChange >= unitValue && unitInDrawer > 0) {
      remainingChange = Number((remainingChange - unitValue).toFixed(2));
      unitInDrawer = Number((unitInDrawer - unitValue).toFixed(2));
      amountFromUnit += unitValue
    }

    console.log(remainingChange);

    if (amountFromUnit > 0) {
      changeArray.push([unit, amountFromUnit])
    }
  }

  if (totalCashInDrawer < changeDue || remainingChange > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCashInDrawer > changeDue) {
    return { status: "OPEN", change: changeArray };
  } else {
    return { status: "CLOSED", change: changeArray };
  }
}

const formatChange = changeArray => changeArray.map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`).join(" ");

const getResult = () => {
  let cashValue = Number(cashInput.value);
  if (cashValue > price) {
    const changeDue = cashValue - price
    const changeResult = getChange(changeDue, cid);
    change.textContent = `Status: ${changeResult.status} ${formatChange(changeResult.change)}`
  } else if (cashValue === price) {
    change.textContent = "No change due - customer paid with exact cash";
  } else {
    alert("Customer does not have enough money to purchase the item");
  }
}

purchaseBtn.addEventListener("click", () => {
  getResult()
})