const scanf = require('scanf');

class Input{
    static getInput(){
        return scanf('%c');
    }
}

module.exports = Input;