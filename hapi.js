var Hapi = require('hapi')

var server = new Hapi.Server(2048)

var controller = {
  get: function(req, reply) {
      reply("Got product id " + req.params.id).code(200)
  }
};

var names = ["products", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "twenty"]

var routes = []

for(var i = 0; i < names.length; i++) {
    routes.push({
        method: 'GET',
        path: '/' + names[i] + '/{id}',
        config: {
            handler: controller.get,
        }
    })
}

server.route(routes)

server.start()
