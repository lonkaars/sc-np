# SC-NP

## Soundcloud Rich Presence for Discord

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
        var socket = new WebSocket('ws://127.0.0.1:6969');
        setInterval(() => {
            if(socket.readyState == 1){
                socket.send(document.querySelector('.playbackSoundBadge').innerHTML + `$$$$$${document.querySelector('.playControl.playControls__play').classList.contains('playing')}$$$$$`)
            }
            if(socket.readyState == 3){
                // try to reconnect
                socket = new WebSocket('ws://127.0.0.1:6969');
            }
        }, 1000);
    })();
    ```
    
4. Download and install [betterdiscord](https://github.com/rauenzi/BetterDiscordApp/releases)

5. Go to [releases](https://github.com/lonkaars/sc-np/releases) and download the plugin for betterdiscord

6. Unzip into C:\Users\%Your User Name%\AppData\Roaming\BetterDiscord\Plugins

    The file structure should look like this:

    ```
    /plugins
    ├── /scnp
    │   └── sc-np-win.exe
    └── soundcloud-now-playing.plugin.js
    ```

7. Enable the plugin in settings



### Note

Because Discord doesn't like people fucking around with their app, you should use betterdiscord at your own risk. I've been using betterdiscord for over 2 years and haven't gotten a ban, but there isn't any guarantee that you won't get one. It is against Discord's terms of use to use a modded client, but betterdiscord without plugins can't be detected*.

This plugin only launches a child process with the now playing server, so it can't be detected* by Discord. I strongly advice against using plugins that give you extra superpowers on Discord.

The server acts like it's a game with rich presence, so it's within the terms of use. If you do want to stay on the safe side and don't want to install betterdiscord, you can run the sc-np-win.exe instead.

I don't have a mac and I'm too lazy to test on linux, but you can compile for yourself with [pkg](https://github.com/zeit/pkg); `pkg .` in repo root.



*Can't be detected means the chance that it's detected is really small

 
