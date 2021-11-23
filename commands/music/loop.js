const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có cái này đang chạy ${message.author}`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`M phải tắt nhạc hiện tại đang loop chứ (${client.config.app.px}loop) ${message.author}`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Lặp bài **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** queue này sẽ lặp vĩnh viễn nka 🔁` : `Something went wrong ${message.author}`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`M phải tắt cái queue bị loop đầu chứ ? (${client.config.app.px}loop queue) ${message.author}`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Chế độ lặp **${queue.repeatMode === 0 ? 'tắt' : 'bật'}** queue bắt đầu` : `Something went wrong ${message.author}... try again ? ❌`);
        };
    },
};