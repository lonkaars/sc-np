// Imports
var {
    fork
} = require('child_process');
var child = fork(__dirname + '/child.js');

// Spawn and restart child
child.on('exit', c => {
    setTimeout(() => {
        child = fork(__dirname + '/child.js')
    }, 4000);
})

// Keep open
process.stdin.resume();