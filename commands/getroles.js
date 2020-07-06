const { RichEmbed } = require('discord.js');

exports.run = async(client, message, args) => {
	const userName = message.member;
	await message.delete ();

	const test1 = message.guild.roles.get('728638781975953511');
	const test2 = message.guild.roles.get('728638853266800700');

	// check to make sure only the user that use the command can react
	// const fn ilter = (reaction, user) => ['🧴', '🌚'].includes(reaction.emoji.name) && user.id === msg.author.id;

	const embed = new RichEmbed()
		.setTitle('Available Roles')
		.setDescription(`
			 
		 	Welcome to **${message.guild.name}**! You may choose from our list of roles you can join/leave from:
			 
			🧴 ${test1.toString()}
			🌚 ${test2.toString()}
		`)
		.setFooter(`ID: ${userName}`);

		message.channel.send(embed).then(async msg => {
			await msg.react('🧴');
			await msg.react('🌚');
		});
}