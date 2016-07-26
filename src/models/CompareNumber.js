class CompareNumber{
    constructor(systemNumber, userNumber){

        this.systemNumber = systemNumber;
        this.userNumber = userNumber;
    }

    getCompareResult(){

        if (this.systemNumber === this.userNumber){
            return '4A0B';
        }
    }
}

module.exports = CompareNumber;