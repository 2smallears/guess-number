var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('./package.json');
jasmine.execute();