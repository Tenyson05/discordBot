exports.run = (bot, msg) => {
	const modRole = msg.guild.roles.find(role => role.name === "Jamaica man");
	if (!modRole) return console.log(`The required role doesnt exist which is, ${modRole}.`);

	if (!msg.member.roles.has(modRole.id)) return msg.reply("You dont possess the proper privilege");

	const target = msg.mentions.users.first();
	if(target) {
		const kickMember = msg.guild.member(target);
		if(kickMember) {
			kickMember.ban({
				reason: 'Being a bad boii!'
			}).then(() => {
				msg.reply(`Get outta here: ${target.tag} https://media.giphy.com/media/l98FjSYsFrOkE/giphy.gif`);
			}).catch(err => {
				msg.reply(`${err}`);
				console.error(err);
			})
		} else {
			msg.reply("Unable to kick member");
		}
	} else {
		msg.reply('User not found');
	}

		// if(msg.member.roles.find(r => r.name === 'Jamaica man')) {
		// 	const user = msg.mentions.users.first();
		// 	if(user) {
		// 		const member = msg.guild.member(user)
		// 		if(member) {
		// 			member.ban({
		// 				reason: 'Bad boy!'
		// 			}).then(() => {
		// 				msg.reply(`Get ouuta here: ${user.tag} https://media.giphy.com/media/l98FjSYsFrOkE/giphy.gif`)
		// 			}).catch(err => {
		// 				msg.reply("User not in the guild");
		// 				console.error(err);
		// 			})
		// 		} else {
		// 			msg.reply("USer not in the guild")
		// 		}
		// 	}else {
		// 		msg.reply("You didnt mention a user")
		// 	}
		// } else {
		// 	msg.reply("You do not have permission")
		// }
}