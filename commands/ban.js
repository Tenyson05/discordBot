const PREFIX = process.env.PREFIX;

module.exports = {
	name: PREFIX + 'ban',
	description: 'Ban players',
	execute(msg, args) {
		if(msg.member.roles.find(r => r.name === 'Jamaica man')) {
			const user = msg.mentions.users.first();
			if(user) {
				const member = msg.guild.member(user)
				if(member) {
					member.ban({
						reason: 'Bad boy!'
					}).then(() => {
						msg.reply(`Get ouuta here: ${user.tag} https://media.giphy.com/media/l98FjSYsFrOkE/giphy.gif`)
					}).catch(err => {
						msg.reply("User not in the guild");
						console.error(err);
					})
				} else {
					msg.reply("USer not in the guild")
				}
			}else {
				msg.reply("You didnt mention a user")
			}
		} else {
			msg.reply("You do not have permission")
		}
	}
}