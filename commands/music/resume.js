module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Không có nhạc ${message.author}`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Hiện tại ${queue.current.title} đã tiếp` : `Something went wrong ${message.author}... try again ? ❌`);
    },
};