const AnswerGenerator = require('../models/AnswerGenerator');
const Compare = require('./CompareNumber');

class Guess {

    static getGuessResult(input) {

        const answer = AnswerGenerator.generator();
        return Compare.getCompareResult(input, answer);
    }
}

module.exports = Guess;