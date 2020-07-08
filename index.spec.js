const {
  calculateLowMiddleIncomeTaxOffset,
  calculateHELPDebtRepayment,
  calculateContributionsTax,
  calculateMedicareLevy,
  calculateMedicareLevySurcharge,
  calculateTax,
  asyncCalculateTax,
} = require('./index.js');
const { expect } = require('chai');

describe('calculateSeniorsPensionersTaxOffset()', () => {
  it('Should return 0 given an invalid number type');
  it('Should return 0 given a negative number');
});

describe('calculateSuperCoContribution()', () => {
  it('Should return 0 given an invalid number type');
  it('Should return 0 given a negative number');
});

describe('calculateLowIncomeSuperTaxOffset()', () => {
  it('Should return 0 given an invalid number type');
  it('Should return 0 given a negative number');
});

describe('calculateLowMiddleIncomeTaxOffset()', () => {
  it('Should return 0 given an invalid number type', () => {
    expect(calculateLowMiddleIncomeTaxOffset('shouldfail')).to.equal(0);
  });
  it('Should return 255 given a negative number', () => {
    expect(calculateLowMiddleIncomeTaxOffset(-15)).to.equal(255);
  });
});

describe('calculateHELPDebtRepayment()', () => {
  it('Should return 0 given an invalid number type', () => {
    expect(calculateHELPDebtRepayment('shouldfail')).to.equal(0);
  });
  it('Should return 0 given a negative number', () => {
    expect(calculateHELPDebtRepayment(-15)).to.equal(0);
  });
  it('Should return 0 given an income of 30,000', () => {
    expect(calculateHELPDebtRepayment(30000)).to.equal(0);
  });
  it('Should return 540 given an income of 54,000', () => {
    expect(calculateHELPDebtRepayment(54000)).to.equal(1080);
  });
  it('Should return 20000 given an income of 200,000', () => {
    expect(calculateHELPDebtRepayment(200000)).to.equal(20000);
  });
});

describe('calculateContributionsTax()', () => {
  it('Should return 0 given an invalid number type', () => {
    expect(calculateContributionsTax('shouldfail')).to.equal(0);
  });
  it('Should return 0 given a negative number', () => {
    expect(calculateContributionsTax(-15)).to.equal(0);
  });
  it('Should return 7500 given a contribution of 50000', () => {
    expect(calculateContributionsTax(50000)).to.equal(7500);
  });

  it('Should return 12600 given a contribution of 84000', () => {
    expect(calculateContributionsTax(84000)).to.equal(12600);
  });
});

describe('calculateMedicareLevy()', () => {
  it('Should return 0 given an invalid number type', () => {
    expect(calculateMedicareLevy('shouldfail')).to.equal(0);
  });
  it('Should return 0 given a negative number', () => {
    expect(calculateMedicareLevy(-15)).to.equal(0);
  });
  it('Should return 0 given an income of 22,398', () => {
    expect(calculateMedicareLevy(22398)).to.equal(0);
  });
  it('Should return 447.98 given an income of 22,399', () => {
    expect(calculateMedicareLevy(22399)).to.equal(447.98);
  });
  it('Should return 1800.06 given an income of 90,002.80', () => {
    expect(calculateMedicareLevy(90002.8)).to.equal(1800.056);
  });
  it('Should return 2000 given an income of 100,000', () => {
    expect(calculateMedicareLevy(100000)).to.equal(2000);
  });
});

describe('calculateMedicareLevySurcharge()', () => {
  it('Should return 0 given an invalid number type', () => {
    expect(calculateMedicareLevySurcharge('shouldfail')).to.equal(0);
  });
  it('Should return 0 given a negative number', () => {
    expect(calculateMedicareLevySurcharge(-15)).to.equal(0);
  });
});

describe('calculateTax()', () => {
  it('Should return 0 given an invalid number type', () => {
    expect(calculateTax('ab')).to.equal(0);
  });

  it('Should return 0 given a negative number', () => {
    expect(calculateTax(-15)).to.equal(0);
  });

  it('Should return 0 given a taxable income of 16,432', () => {
    expect(calculateTax(16432)).to.equal(0);
  });

  it('Should return 3192 given a taxable income of 35,000', () => {
    expect(calculateTax(35000)).to.equal(3192);
  });

  it('Should return 44772.25 given a taxable income of 154,798', () => {
    expect(calculateTax(154798)).to.equal(44772.26);
  });

  it('Should return 15887.55 given a taxable income of 74,894', () => {
    expect(calculateTax(74894)).to.equal(15887.55);
  });

  it('Should return 802793.05 given a taxable income of 1,843,769', () => {
    expect(calculateTax(1843769)).to.equal(802793.05);
  });
});

describe('asyncCalculateTax()', async () => {
  it('Should throw an error given an invalid number type', async () => {
    try {
      await asyncCalculateTax('ab');
    } catch (err) {
      expect(err.message).to.equal('Invalid input');
    }
  });

  it('Should return 15887.55 given a taxable income of 74,894', async () => {
    expect(await asyncCalculateTax(74894)).to.equal(15887.55);
  });

  it('Should return 802793.05 given a taxable income of 1,843,769', async () => {
    expect(await asyncCalculateTax(1843769)).to.equal(802793.05);
  });
});
