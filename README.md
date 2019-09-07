# SC-NP

## Soundcloud Rich Presence for Discord

### How it works

This app uses tampermonkey scripts that are injected into soundcloud, which tell the custom nodejs script what you're listening to. The custom script only runs on domains matching the regular expression `https\:\/\/soundcloud\.com\/.*` so it can't run outside of soundcloud. The custom nodejs script then takes the data from the browser script and parses it. Then it tells Discord that you're playing soundcloud. Because of rich presence limitations it only displays the song and artist name. When you pause a song it toggles the artist name every second between the artist name and "[PAUSED]".



### Installation instructions

1. Install Tampermonkey (Chrome) or Greasemonkey (Firefox)

2. Create new script

3. Paste into script: 

    ```js
    // ==UserScript==
    // @name         Soundcloud Now Playing Rich Presence
    // @namespace    https://soundcloud.com/
    // @version      0.1
    // @description  Displays current song on discord as now playing https://github.com/lonkaars/sc-np
    // @author       Loekaars
    // @match        https://soundcloud.com/*
    // @grant        none
    // ==/UserScript==
    
    (() => {
        // Connect to websocket
        var socket = new WebSocket('ws://127.0.0.1:6969');
        
        // Check what you're playing every second
        setInterval(() => {
            // Only check if the websocket is connected (this is to prevent errors)
            if(socket.readyState == 1){
                // Send the innerHTML of the play controls panel
                socket.send(document.querySelector('.playbackSoundBadge').innerHTML + `$$$$$${document.querySelector('.playControl.playControls__play') .classList.contains('playing')}$$$$$`)
            }
        }, 1000);
    })();
    ```

4. Download binaries or run with node:



Node:

1. `git clone` this repo
2. `npm i`
3. `node index.js`



Binaries:

1. Download a binary from the [releases](#) tab
2. Run or paste in startup folder (~/AppData/Roaming/Microsoft/Windows/Start Menu/Startup)