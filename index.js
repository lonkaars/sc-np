// Imports
var {
    fork
} = require('child_process');
var child = fork(__dirname + '/child.js');

// Spawn and restart child
child.on('exit', c => {
    restart()
})

function restart() {
    setTimeout(() => {
        child = fork(__dirname + '/child.js');
        child.on('exit', c => {
            restart()
        })
    }, 4000);
}

// Keep open
process.stdin.resume();