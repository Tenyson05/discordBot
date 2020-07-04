module.exports = (bot, msg) => {
	// Ignore all bots
	if(msg.author.bot) return;

	const PREFIX = process.env.PREFIX;

	// Ignore messages not starting with prefix
	if(msg.content.indexOf(PREFIX) !== 0) return;

	// Standard argument/command name definition
	const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	// Grab the command data from the bot.commands Enmap
	const cmd = bot.commands.get(command);

	// if the command doesnt exist, exist and do nothing
	if(!cmd) return;

	// Run the command
	cmd.run(bot, msg, args);
};