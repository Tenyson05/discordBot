const { RichEmbed } = require("discord.js");

const PREFIX = process.env.PREFIX;

module.exports = {
	name: PREFIX + 'role',
	description: 'Assign a role to the selected user',
	async execute(msg, args) {
		const test1 = msg.guild.roles.get('728638781975953511');
		const test2 = msg.guild.roles.get('728638853266800700');

		// check to make sure only the user that use the command can react
		const filter = (reaction, user) => ['🧴', '🌚'].includes(reaction.emoji.name) && user.id ===  msg.author.id;

		const embed = new RichEmbed()
			.setTitle('Available Roles')
			.setDescription(`
				🧴 ${test1.toString()}
				🌚 ${test2.toString()}
			`)
			.setFooter(`ID: ${msg.author.id}`);

			msg.channel.send(embed).then(async msg => {
				await msg.react('🧴');
				await msg.react('🌚');

				msg.awaitReaction(filer, {
					max: 1,
					time: 30000,
					errors: ['time']
				}).then(collected => {

					const reaction = collected.first();

					switch(reaction.emoji.name) {
						case '🧴':
							msg.member.addRole(test1).catch(err => {
								console.log(err);
								// Makes it easier to track down errors
								return msg.channel.send(`Error adding you to the role: ${err.message}.`);
							});
							msg.channel.send(`Added to **${test1.name}** role`).then(m => m.delete(20000));
							msg.delete();
							break;
						case '🌚':
							msg.member.addRole(test2).catch(err => {
								console.log(err);
								// Makes it easier to track down errors
								return msg.channel.send(`Error adding you to the role: ${err.message}.`);
							});
							msg.channel.send(`Added to **${test2.name}** role`).then(m => m.delete(20000));
							msg.delete();
							break;

					}

				}).catch(collected => {

					return msg.channel.send('You failed to react to the message in time!!');

				});
			});
	}

	
}