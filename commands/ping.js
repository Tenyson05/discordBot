module.exports = {
	name: '!ping',
	description: 'Ping',
	execute(msg, args) {
		msg.reply('Pong');
		msg.channel.send('pong');
	}
}