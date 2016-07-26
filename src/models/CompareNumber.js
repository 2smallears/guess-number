class CompareNumber{

    static getCompareResult(input, answer){

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
        const countB = sameNum.length - countA.length;

        return `${countA.length}A${countB}B`;
    }
}

module.exports = CompareNumber;