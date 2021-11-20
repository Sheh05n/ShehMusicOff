module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Ko có nhạc nào đang chạy ${message.author}`);

        if (!queue.previousTracks[1]) return message.channel.send(`ĐÉO CÓ NHẠC NÀO CHẠY TRC ĐÂY ${message.author}`);

        await queue.back();

        message.channel.send(`Đang chạy nhạc trc nka **previous**`);
    },
};