module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có nhạc wtf ${message.author}`);

        if (!queue.tracks[0]) return message.channel.send(`Ko có nhạc ${message.author}`);

        await queue.shuffle();

        return message.channel.send(`Đã xếp loạn **${queue.tracks.length}** `);
    },
};