// Imports
var WebSocketServer = require('websocket').server;
var http = require('http');
var cheerio = require('cheerio')
var server = http.createServer(function (request, response) {});
var p = require('discord-rich-presence')('619833473901002752');
var song, artist, paused, t;
var playing = null;
var pt = false;

// Create a websocket server on port 6969 :lenny-face:
server.listen(6969, function () {});
wsServer = new WebSocketServer({
    httpServer: server
});

// request event listener
wsServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);

    // message event
    connection.on('message', function (message) {
        // check if message is encoded in utf-8
        if (message.type == 'utf8') {
            // use cheerio to parse html
            var $ = cheerio.load(message.utf8Data);
            artist = $('.playbackSoundBadge__titleContextContainer .sc-link-light').text().trim();
            song = $('.playbackSoundBadge__title span[aria-hidden="true"]').text().trim();

            // what a hack!
            paused = !message.utf8Data.includes('$$$$$true$$$$$')
        }
        playing = true;
    });

    connection.on('close', c => {
        playing = false;
    });
});

function setActivity() {
    if (playing == true) {
        p.updatePresence({
            details: song,
            state: paused && pt ? '[PAUSED]' : `by ${artist}`
        })
    } else if (playing == false) {
        // Discord sees child.js as the game that it's getting rich presence from so it restarts here to remove the presence when you close soundcloud
        process.exit(0);
    }
}
setInterval(() => {
    pt = !pt
    setActivity();
}, 1e3);