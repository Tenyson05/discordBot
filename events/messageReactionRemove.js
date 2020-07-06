module.exports = async(bot, messageReaction, user) => {
	const message = messageReaction.message;
	const channel = message.guild.channels.find(c => c.name === 'welcome-channel');
	const member = message.guild.members.get(user.id);
	if(member.user.bot) return;

	const test1 = message.guild.roles.get('728638781975953511');
	const test2 = message.guild.roles.get('728638853266800700');

	if( ['🧴', '🌚'].includes(messageReaction.emoji.name) && message.channel.id === channel.id) {
		switch(messageReaction.emoji.name) {
			case '🧴':
				member.removeRole(test1).catch(console.error);
				break;
			case '🌚':
				member.removeRole(test2).catch(console.error);
				break;
			default: 
				message.send("nothing");
				break;
		}
	}

}