/**
 * Return the taxed amount given a income amount.
 */
export function calculateTax(income: number): number;

/**
 * Return the taxed amount given a income amount as a Promise.
 */
export function asyncCalculateTax(income: number): number;

export default calculateTax;
