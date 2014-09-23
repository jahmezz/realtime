var gameport = process.env.PORT || 4004,
    io = require('socket.io'),
    express = require('express'),
    UUID = require('node-uuid'),

    verbose = false,
    app = express.createServer();

//listen
app.listen(gameport);

//write
console.log('/t :: Express :: Listening on port ' + gameport);

//use index.html
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/simplest.html');
});

app.get('/*', function (req, res, next) {
    var file = req.params[0];

    if(verbose)
        console.log('\t :: Express :: file requested: ' + file);

    res.sendfile(__dirname + '/' + file);
});