const calculateSeniorsPensionersTaxOffset = (income) => {};

const calculateSuperCoContribution = (income) => {};

const calculateLowIncomeSuperTaxOffset = (income) => {};

/**
 * Return the Low and middle income tax offset (LMITO) amount given an income amount.
 *
 * @param {number} income - Taxable income
 */
const calculateLowMiddleIncomeTaxOffset = (income) => {
  if (income < 37000) {
    return 255;
  } else if (income <= 48000) {
    return parseFloat(((income - 37000) * 0.075 + 255).toFixed(2));
  } else if (income <= 90000) {
    return 1080;
  } else if (income <= 126000) {
    return parseFloat(1080 - ((income - 90000) * 0.03).toFixed(2));
  } else if (income > 126000) {
    return 0;
  } else {
    return 0;
  }
};

/**
 * Return the HELP debt repayment amount given an income amount.
 *
 * @param {number} income - Taxable income
 */
const calculateHELPDebtRepayment = (income) => {
  if (income < 46620) {
    return 0;
  } else if (income <= 53826) {
    return income * 0.01;
  } else if (income <= 57055) {
    return income * 0.02;
  } else if (income <= 60479) {
    return income * 0.025;
  } else if (income <= 64108) {
    return income * 0.03;
  } else if (income <= 67954) {
    return income * 0.035;
  } else if (income <= 72031) {
    return income * 0.04;
  } else if (income <= 76354) {
    return income * 0.045;
  } else if (income <= 80935) {
    return income * 0.05;
  } else if (income <= 85792) {
    return income * 0.055;
  } else if (income <= 90939) {
    return income * 0.06;
  } else if (income <= 96396) {
    return income * 0.065;
  } else if (income <= 102179) {
    return income * 0.07;
  } else if (income <= 108309) {
    return income * 0.075;
  } else if (income <= 114707) {
    return income * 0.08;
  } else if (income <= 121698) {
    return income * 0.085;
  } else if (income <= 128999) {
    return income * 0.09;
  } else if (income <= 136739) {
    return income * 0.095;
  } else if (income > 136739) {
    return income * 0.1;
  } else {
    return 0;
  }
};

/**
 * Return the tax amount given a concessional contributions (before-tax) amount.
 *
 * @param {number} contribution - before-tax super contribution
 */
const calculateContributionsTax = (contribution) => {
  if (contribution >= 0) {
    return contribution * 0.15;
  } else {
    return 0;
  }
};

/**
 * Return the Medicare Levy amount given an income amount.
 *
 * @param {number} income - Taxable income
 */
const calculateMedicareLevy = (income) => {
  if (income <= 22398) {
    return 0;
  } else if (income > 22398) {
    return income * 0.02;
  } else {
    return 0;
  }
};

/**
 * Return the Medicare Levy Surcharge amount given an income amount.
 *
 * @param {number} income - Taxable income
 */
const calculateMedicareLevySurcharge = (income) => {
  if (income <= 90000) {
    return 0;
  } else if (income <= 105000) {
    return income * 0.01;
  } else if (income <= 140000) {
    return income * 0.0125;
  } else if (income > 140000) {
    return income * 0.015;
  } else {
    return 0;
  }
};

/**
 * Return the taxed amount given a income amount.
 *
 * @param {number} income - Taxable income
 */
const calculateTax = (income) => {
  if (income < 18200) {
    return 0;
  } else if (income <= 37000) {
    return (income - 18200) * 0.19;
  } else if (income <= 90000) {
    return parseFloat(((income - 37000) * 0.325 + 3572).toFixed(2));
  } else if (income <= 180000) {
    return parseFloat(((income - 90000) * 0.37 + 20797).toFixed(2));
  } else if (income > 180001) {
    return parseFloat(((income - 180000) * 0.45 + 54097).toFixed(2));
  } else {
    return 0;
  }
};

/**
 * Return the taxed amount given a income amount.
 *
 * @param {number} income - Taxable income
 */
const asyncCalculateTax = (income) => {
  return new Promise((resolve, reject) => {
    if (income < 18200) {
      resolve(0);
    } else if (income <= 37000) {
      resolve(income - 18200) * 0.19;
    } else if (income <= 90000) {
      resolve(parseFloat(((income - 37000) * 0.325 + 3572).toFixed(2)));
    } else if (income <= 180000) {
      resolve(parseFloat(((income - 90000) * 0.37 + 20797).toFixed(2)));
    } else if (income > 180001) {
      resolve(parseFloat(((income - 180000) * 0.45 + 54097).toFixed(2)));
    } else {
      reject(new Error('Invalid input'));
    }
  });
};

module.exports.calculateSeniorsPensionersTaxOffset = calculateSeniorsPensionersTaxOffset;
module.exports.calculateSuperCoContribution = calculateSuperCoContribution;
module.exports.calculateLowIncomeSuperTaxOffset = calculateLowIncomeSuperTaxOffset;
module.exports.calculateLowMiddleIncomeTaxOffset = calculateLowMiddleIncomeTaxOffset;
module.exports.calculateHELPDebtRepayment = calculateHELPDebtRepayment;
module.exports.calculateContributionsTax = calculateContributionsTax;
module.exports.calculateMedicareLevy = calculateMedicareLevy;
module.exports.calculateMedicareLevySurcharge = calculateMedicareLevySurcharge;
module.exports.calculateTax = calculateTax;
module.exports.asyncCalculateTax = asyncCalculateTax;
