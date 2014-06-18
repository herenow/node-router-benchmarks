var koa = require('koa');
var router = require('koa-router')

var app = koa()

app.use(router(app))

var controller = {
  get: function *() {
    this.body = "Got product id " + this.params.id;
  }
};

var names = ["products", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "twenty"]

for(var i = 0; i < names.length; i++) {
    app.get('/' + names[i] + '/:id', controller.get);
}

app.listen(2048);
