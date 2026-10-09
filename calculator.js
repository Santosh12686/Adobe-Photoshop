const MONTHS_PER_YEAR = 12;

function assertFiniteNumber(value, name) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

/**
 * Future value of a starting balance plus monthly deposits,
 * compounded monthly. Deposits are treated as an ordinary annuity
 * (end of each month). A 0% rate is just principal + deposits.
 */
export function calculateFinalBalance({
  startingBalance,
  monthlyDeposit,
  annualRatePercent,
  years,
}) {
  assertFiniteNumber(startingBalance, "startingBalance");
  assertFiniteNumber(monthlyDeposit, "monthlyDeposit");
  assertFiniteNumber(annualRatePercent, "annualRatePercent");
  assertFiniteNumber(years, "years");

  if (startingBalance < 0) throw new RangeError("startingBalance cannot be negative");
  if (monthlyDeposit < 0) throw new RangeError("monthlyDeposit cannot be negative");
  if (annualRatePercent < 0) throw new RangeError("annualRatePercent cannot be negative");
  if (years < 0) throw new RangeError("years cannot be negative");

  const months = years * MONTHS_PER_YEAR;
  const monthlyRate = annualRatePercent / 100 / MONTHS_PER_YEAR;

  if (monthlyRate === 0) {
    return startingBalance + monthlyDeposit * months;
  }

  const growth = (1 + monthlyRate) ** months;
  const compoundedPrincipal = startingBalance * growth;
  const compoundedDeposits =
    monthlyDeposit * ((growth - 1) / monthlyRate);

  return compoundedPrincipal + compoundedDeposits;
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
}
