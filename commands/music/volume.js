const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có nhạc đổi cc ${message.author}`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Âm lượng hiện tại ${queue.volume} 🔊\n*Để đổi chọn từ **1** và **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Âm lượng m đổi đã như thế này ròi${message.author}`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Đéo hợp lệ m định crash bot bố m à nâu nâu `);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Đã đổi sang  **${vol}**/**${maxVol}**% 🔊` : `Lỗi ${message.author}`);
    },
};