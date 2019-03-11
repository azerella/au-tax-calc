const calculateTax = require( './index.js' );
const { expect } = require('chai');

describe( 'calculateTax()', () => {
    it( 'Should return 0 given an invalid number type', () => {
        expect( calculateTax( 'ab' ) ).to.equal( 0 );
    });

    it( 'Should return 0 given a negative number', () => {
        expect( calculateTax( -15 ) ).to.equal( 0 );
    });

    it( 'Should return 0 given a taxable income of 16,432', () => {
        expect( calculateTax( 16432 ) ).to.equal( 0 );
    });

    it( 'Should return 3192 given a taxable income of 35,000', () => {
        expect( calculateTax( 35000 ) ).to.equal( 3192 );
    });

    it( 'Should return 44772.25 given a taxable income of 154,798', () => {
        expect( calculateTax( 154798 ) ).to.equal( 44772.26 );
    });

    it( 'Should return 15887.55 given a taxable income of 74,894', () => {
        expect( calculateTax( 74894 ) ).to.equal( 15887.55 );
    });

    it( 'Should return 802793.05 given a taxable income of 1,843,769', () => {
        expect( calculateTax( 1843769 ) ).to.equal( 802793.05 );
    });
});