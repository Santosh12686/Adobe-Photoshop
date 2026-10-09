import assert from "node:assert/strict";
import { test } from "node:test";
import { calculateFinalBalance, formatCurrency } from "./calculator.js";

test("zero interest is starting balance plus all deposits", () => {
  const result = calculateFinalBalance({
    startingBalance: 1000,
    monthlyDeposit: 100,
    annualRatePercent: 0,
    years: 1,
  });

  assert.equal(result, 2200);
});

test("zero years returns the starting balance", () => {
  const result = calculateFinalBalance({
    startingBalance: 2500,
    monthlyDeposit: 400,
    annualRatePercent: 5,
    years: 0,
  });

  assert.equal(result, 2500);
});

test("zero deposits compounds the starting balance monthly", () => {
  const result = calculateFinalBalance({
    startingBalance: 10_000,
    monthlyDeposit: 0,
    annualRatePercent: 6,
    years: 2,
  });

  const expected = 10_000 * (1 + 0.06 / 12) ** 24;
  assert.ok(Math.abs(result - expected) < 1e-9);
});

test("known monthly-compounding example with deposits", () => {
  const result = calculateFinalBalance({
    startingBalance: 0,
    monthlyDeposit: 100,
    annualRatePercent: 12,
    years: 1,
  });

  // Ordinary annuity: 100 * ((1.01^12 - 1) / 0.01)
  const expected = 100 * (((1.01) ** 12 - 1) / 0.01);
  assert.ok(Math.abs(result - expected) < 1e-9);
  assert.ok(Math.abs(result - 1268.25) < 0.01);
});

test("rejects negative inputs", () => {
  assert.throws(
    () =>
      calculateFinalBalance({
        startingBalance: -1,
        monthlyDeposit: 0,
        annualRatePercent: 0,
        years: 1,
      }),
    RangeError,
  );
});

test("formats pounds sterling to two decimal places", () => {
  assert.equal(formatCurrency(47526.548), "£47,526.55");
});
