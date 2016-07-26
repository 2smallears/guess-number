class CompareNumber{
    constructor(input, answer){
        this.input = input;
        this.answer = answer;
    }

    static getCompareResult(input, answer){

        if (input === answer){
            return '4A0B';
        } else {
            const inputArr = input.split('');
            const answerArr = answer.split('');

            const sameNum = answerArr.filter(num => inputArr.find(input => input === num));

            const resultArr = inputArr.map(i => {
                if (inputArr.indexOf(i) === answerArr.indexOf(i)){
                    return 'A';
                } else {
                    return 'B';
                }
            });

            const countA = resultArr.filter(i => i === 'A');

            return `${countA.length}A${sameNum.length - countA.length}B`;
        }
    }
}

module.exports = CompareNumber;