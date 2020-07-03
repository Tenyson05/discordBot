const PREFIX = process.env.PREFIX;

module.exports = {
	name: PREFIX + 'ping',
	description: 'Ping',
	execute(msg, args) {
		console.log("Entered...")
		msg.channel.send('pong');
	}
}