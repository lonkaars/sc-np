// Imports
var {fork} = require('child_process');
var child = fork('./child.js');

// Spawn and restart child
child.on('exit', c => {
    setTimeout(() => {
        child = fork('./child.js')
    }, 4000);
})

// Keep open
process.stdin.resume();
