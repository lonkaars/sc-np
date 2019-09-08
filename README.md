# SC-NP

## Soundcloud Rich Presence for Discord

<div style="padding: 10px; border-radius: 10px; background: #6c82cf; color: #fff; display: inline-block">
    <b style="text-transform: uppercase">Playing a game</b><br>
    <div style="height:10px;"></div>
	<b style="margin: 0;">Soundcloud</b>
	<p style="margin: 0;">Strong Dragon - Libre</p>
	<p style="margin: 0;">by more creativity records</p>
	<p style="margin: 0;">1:27 left</p>
</div>

### Installation instructions

1. Install Tampermonkey (Chrome) or Greasemonkey (Firefox)

2. Install [this](https://gist.github.com/lonkaars/00a87b495f11b7cc554cb05443929f88/raw/edb4cf7faa6dc3249f5d4b8e0722a3a0be537b3b/sc-np-tampermonkey.user.js) script (script source can be found under the [releases](https://github.com/lonkaars/sc-np/releases) section)

4. Download and install [betterdiscord](https://github.com/rauenzi/BetterDiscordApp/releases)

5. Go to [releases](https://github.com/lonkaars/sc-np/releases) and download the plugin for betterdiscord

6. Unzip into C:/Users/%Your User Name%/AppData/Roaming/BetterDiscord/Plugins

    The file structure should look like this:

    ```
    /plugins
    ├── /scnp
    │   └── sc-np-win.exe
    └── soundcloud-now-playing.plugin.js
    ```

7. Enable the plugin in Discord settings



### Note

Because Discord doesn't like people fucking around with their app, you should use betterdiscord at your own risk. I've been using betterdiscord for over 2 years and haven't gotten a ban, but there isn't any guarantee that you won't get one. It is against Discord's terms of use to use a modded client, but betterdiscord without plugins can't be detected*.

This plugin only launches a child process with the now playing server, so it can't be detected* by Discord. I strongly advice against using plugins that give you extra superpowers on Discord.

The server acts like it's a game with rich presence, so it's within the terms of use. If you do want to stay on the safe side and don't want to install betterdiscord, you can run the sc-np-win.exe instead.

I don't have a mac and I'm too lazy to test on linux, but you can compile for yourself with [pkg](https://github.com/zeit/pkg); `pkg .` in repo root.



*Can't be detected means the chance that it's detected is really small

 
