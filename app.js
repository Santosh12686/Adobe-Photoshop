import { calculateFinalBalance, formatCurrency } from "./calculator.js";

const form = document.getElementById("calculator-form");
const errorEl = document.getElementById("form-error");
const resultEl = document.getElementById("final-balance");

function readNumber(id) {
  const raw = document.getElementById(id).value;
  return Number(raw);
}

function showError(message) {
  errorEl.hidden = !message;
  errorEl.textContent = message ?? "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showError("");

  try {
    const finalBalance = calculateFinalBalance({
      startingBalance: readNumber("starting-balance"),
      monthlyDeposit: readNumber("monthly-deposit"),
      annualRatePercent: readNumber("interest-rate"),
      years: readNumber("years"),
    });
    resultEl.textContent = formatCurrency(finalBalance);
  } catch (error) {
    resultEl.textContent = "—";
    showError(error.message);
  }
});
