module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Không có nhạc nào đang chơi ${message.author}`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Nhạc ${queue.current.title} đã dừng` : `Lỗi ${message.author}`);
    },
};