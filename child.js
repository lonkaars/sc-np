// Imports
var WebSocketServer = require(__dirname + '/node_modules/websocket').server;
var http = require('http');
var cheerio = require(__dirname + '/node_modules/cheerio')
var server = http.createServer(function (request, response) {});
var p = require(__dirname + '/node_modules/discord-rich-presence')('619833473901002752');
var song, artist, paused, epoch, t;
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

            // Song duration
            //! HELP THIS IS A MESS
            var $ = cheerio.load(message.utf8Data.match(/(?<=%%%)(.*)(?=%%%)/)[0])
            var cur = $('span[aria-hidden="true"]').eq(0).text().split(':').reverse()
            var dur = $('span[aria-hidden="true"]').eq(1).text().split(':').reverse()
            var now = new Date()
            epoch = new Date(now.getTime() + new Date(1970, 0, 1, dur[3] ? dur[3] : 1, dur[1] ? dur[1] : 0, dur[0] ? dur[0] : 0).getTime() - new Date(1970, 0, 1, cur[3] ? cur[3] : 1, cur[1] ? cur[1] : 0, cur[0] ? cur[0] : 0).getTime())
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
            state: paused && pt ? '[PAUSED]' : `by ${artist}`,
            endTimestamp: epoch
        })
    } else if (playing == false) {
        // Discord sees child.js as the game that it's getting rich presence from so it restarts here to remove the presence when you close soundcloud
        p.updatePresence({
            details: 'Stopped Listening'
        })
        process.exit(0);
    }
}
setInterval(() => {
    pt = !pt
    setActivity();
}, 1e3);