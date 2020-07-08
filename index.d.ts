export function calculateSeniorsPensionersTaxOffset(income: number): number;
export function calculateSuperCoContribution(income: number): number;
export function calculateLowIncomeSuperTaxOffset(income: number): number;
export function calculateLowMiddleIncomeTaxOffset(income: number): number;
export function calculateHELPDebtRepayment(income: number): number;
export function calculateContributionsTax(contribution: number): number;
export function calculateMedicareLevy(income: number): number;
export function calculateMedicareLevySurcharge(income: number): number;

/**
 * Return the taxed amount given a income amount.
 */
export function calculateTax(income: number): number;

/**
 * Return the taxed amount given a income amount as a Promise.
 */
export function asyncCalculateTax(income: number): number;
