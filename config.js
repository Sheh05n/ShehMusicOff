module.exports = {
    app: {
        px: '-',
        token: 'ODg2OTMyODYwMzYyMTkwODYw.YT8ymA.zs_aURPiTemYNw4tWuH_eglws30',
        playing: 'Sheh05n/-play'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: true,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
