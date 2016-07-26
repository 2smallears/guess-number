const AnswerGenerator = require('../src/models/AnswerGenerator');

describe('Answer Generator', () => {
    it('should generator answer', () => {
        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        };

        const answer = AnswerGenerator.generator();
        expect(answer.length).toEqual(4);
        expect(answer.every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.generator()).not.toEqual(AnswerGenerator.generator());
    });
});