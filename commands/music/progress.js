module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có nhạc nào đang chơi ${message.author}`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Đang phát bài trực tiếp, ko mất dữ liệu hjhj`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};