var framework = require('total.js');
var http = require('http');

framework.run(http, false, 2048);

var controller = function(id) {
    this.plain("Got product id " + id)
}

var names = ["products", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "twenty"]

for(var i = 0; i < names.length; i++) {
    framework.route('/' + names[i] + '/{id}', controller);
}
