
module.exports = {
	name: 'kick',
	description: 'Kicking players',
	execute(msg, args) {
		const user = msg.mentions.users.first();
		if(user) {
			const member = msg.guild.member(user)
			if(member) {
				member.kick()
				.then(() => {
					msg.reply(`Successfully kicked ${user.tag}`)
				})
				.catch(err => {
					msg.reply('Unable to kick the member');
				})
			} else {
				msg.reply("That user isnt in this place!");
			}
		}else {
			msg.reply("You didnt mention the user to kick!");
		}
	}
}

// if (msg.mentions.users.size) {
// 	const taggedUser = msg.mentions.users.first();
// 	if (taggedUser) {
// 		console.log('HERE', taggedUser)
// 		taggedUser
// 		.kick()
// 		.then(() => {
// 			msg.reply(`Successfully kicked ${taggedUser.username}`)
// 		})
// 	} else {
// 		msg.reply('Unable to kick user');
// 		console.error(err)
// 	}
// } else {
// 	msg.reply('Please tag a valid user!');
// }