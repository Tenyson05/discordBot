exports.run = (bot, msg) => {
	// Make sure the user has the right roll, for now Jamaican man as testing
	const modRole = msg.guild.roles.find(role => role.name === "Jamaica man");
	if (!modRole) return console.log(`The required role doesnt exist which is, ${modRole}.`);

	// Check to make sure that the user sending the message has the right authority
	if (!msg.member.roles.has(modRole.id)) return msg.reply("You dont possess the proper privilege");


	// Triggers if the user hasn't mention a target
	// if(msg.mentions.users.size === 0) return msg.reply("Please mention a user to kick");

	// if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.reply("");

	const target = msg.mentions.users.first();
	if (target) {
		const kickMember = msg.guild.member(target);
		if (kickMember) {
			kickMember
				.kick()
				.then(() => {
					msg.reply(`Successfully kicked ${target.tag}`);
				})
				.catch(err => {
					msg.reply('Unable to perform action');
					console.error(err)
				})
		} else {
			msg.reply("User not available");
		}
	} else {
		msg.reply('Please mention a user');
	}
}