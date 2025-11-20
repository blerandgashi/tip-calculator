// Html elements
let billEl = document.querySelector("#bill");
let tipAmountEl = document.querySelector("#tip-amount");
let totalEl = document.querySelector("#total");
let perPersonEl = document.querySelector("#per-person");
let peopleEl = document.querySelector("#people");

// Calculating variables
let tipAmount = 0;
let totalAmount = 0;
let perPerson = 0;
let selectedTip = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  btn.addEventListener("click", function(){
    buttons.forEach(b => b.classList.remove('active'));
    
    selectedTip = btn.dataset.tip;

    btn.classList.add("active")

    calculate()
  })
})

billEl.addEventListener("input", calculate);
peopleEl.addEventListener("input", calculate)

function calculate(){
  let billToNumber = parseFloat(billEl.value) || 0;
  let perPersonNumber = parseFloat(peopleEl.value) || 1;

  tipAmount = selectedTip * (billToNumber / 100);
  totalAmount = billToNumber + tipAmount;
  perPerson = totalAmount / perPersonNumber;

  tipAmountEl.textContent = `$${(tipAmount.toFixed(2))}`;
  totalEl.textContent = `$${(totalAmount.toFixed(2))}`;     
  perPersonEl.textContent = `$${(perPerson.toFixed(2))}`; 
}
