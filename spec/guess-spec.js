const AnswerGenerator = require('../src/models/AnswerGenerator');
const Guess = require('../src/models/Guess');

describe('Guess number', () => {

    it('should play this game', () => {

        spyOn(AnswerGenerator, 'generator').and.returnValue('1234');
        const result = Guess.getGuessResult('1234');
        expect(result).toEqual('4A0B');
    });
});