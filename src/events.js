player.on('error', (queue, error) => {
    console.log(`Lỗi tin nhắn : ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Lỗi kết nối , LÝ DO:${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`bắt đầu ${track.title} trong kênh  **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Bài ${track.title} đã đc thêm`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Bị đá rồi huhu , xóa tất cả queue');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Đéo ai ở cùng t , cô đơn quá t tự tử chết mẹ đây');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Bot đã xong bài hjhjh');
});