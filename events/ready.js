module.exports = (bot) => {
	console.log(`Ready to serve in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`);
	const welcome = bot.channels.find(c => c.name === 'welcome-channel');
	welcome.fetchMessages({ limit: 10}).then(collected => console.log('Fetched ' + collected.size + ' messages.')).catch(console.error);
}