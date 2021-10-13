const expect = require('chai').expect;
const accountTypeChecker = require('../accountTypeCheck').accountTypeChecker;
const {
    typeBAccountBalanceHistory,
    otherCaseTypeBAccountBalanceHistory,
    typeAAccountBalanceHistory
} = require('../constants')

// Test cases to determine account type
describe('accountTypeChecker', function () {
    it('Should return Type B account', function () {
        expect(accountTypeChecker(typeBAccountBalanceHistory)).to.equal('B')
    });

    it('Should return Type A account', function () {
        expect(accountTypeChecker(typeAAccountBalanceHistory)).to.equal('A')
    });

    // As account gets credited, so even after the decreases by same amount
    it('other cases => Should return Type B account', function () {
        expect(accountTypeChecker(otherCaseTypeBAccountBalanceHistory)).to.equal('B')
    });
})