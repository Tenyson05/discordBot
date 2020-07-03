const PREFIX = process.env.PREFIX;

module.exports = {
	name: PREFIX + "test",
	description: "N/A",
	execute(msg, args) {
		if (msg.mentions.users.size) {
			const taggedUser = msg.mentions.users.first();
			if (taggedUser) {
				console.log('HERE', taggedUser)
				taggedUser
					.kick()
					.then(() => {
						msg.reply(`Successfully kicked ${taggedUser.username}`)
					})
			} else {
				msg.reply('Unable to kick user');
				console.error(err)
			}
		} else {
			msg.reply('Please tag a valid user!');
		}
	}
}


