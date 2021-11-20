module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Ko có nhạc nào đang chạy ${message.author}`);

        if (!queue.tracks[0]) return message.channel.send(`Ko có nhạc nào chạy ${message.author} `);

        await queue.clear();

        message.channel.send(`ĐÃ DỌN RÁC`);
    },
};