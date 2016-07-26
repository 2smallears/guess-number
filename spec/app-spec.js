const CompareNumber = require('../src/models/CompareNumber');

describe('guess number', () => {

    const systemNumber = '1234';
    it('get 4A0B', () => {

        const userNumber = '1234';
        const compareNumber = new CompareNumber(systemNumber, userNumber);
        const compareResult = compareNumber.getCompareResult();
        const expectResult = '4A0B';
        expect(compareResult).toEqual(expectResult);
    });
});