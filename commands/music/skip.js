module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có nhạc nào đang chơi${message.author}`);

        const success = queue.skip();

        return message.channel.send(success ? `Nhạc ${queue.current.title} đã skip` : `Something went wrong ${message.author}`);
    },
};