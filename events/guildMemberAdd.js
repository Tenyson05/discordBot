module.exports = (bot, member) => {
	let userLogs = member.guild.channels.find(c => c.name === 'logs');

	userLogs.send(`${member.user.tag} has joined **${member.guild}**!`);
}