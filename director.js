var http = require('http'),
    director = require('director');

var controller = function(id) {
    this.res.writeHead(200)
    this.res.end("Got product id " + id)
}

var names = ["products", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "twenty"]

var router = new director.http.Router();

var server = http.createServer(function (req, res) {
    router.dispatch(req, res, function (err) {
      if (err) {
        res.writeHead(404);
        res.end();
      }
    });
});

for(var i = 0; i < names.length; i++) {
    router.get('/' + names[i] + '/:id', controller);
}

server.listen(2048);
