const CompareNumber = require('../src/models/CompareNumber');

describe('guess number', () => {

    it('get result', () => {
        [
            {
                input: '1234',
                answer: '1234',
                result: '4A0B'
            },
            {
                input: '4321',
                answer: '1234',
                result: '0A4B'
            },
            {
                input: '1254',
                answer: '1234',
                result: '3A0B'
            }
        ].forEach((item) => {
           const test = new CompareNumber(item.input, item.answer);
            const result = test.getCompareResult();
            expect(result).toEqual(item.result);
        });
    });
});