const { RichEmbed } = require("discord.js")

exports.run = async (bot, msg, messageReaction) => {

	const user = msg.member.user.username
	const userID = msg.member.user.id
	const ticket = msg.content.replace(/!ticket/g,`😞`)
	var today = new Date().toLocaleString();
	if(user.bot) return;
	await msg.delete()
	const submitTicket = new RichEmbed()
		.setDescription(`
			📨 your ticket has been submitted
		`)
		.setColor(0xdd9323)
		.setTimestamp();

	msg.reply(submitTicket)

	let ticketLogs = msg.guild.channels.find(c => c.name === 'ticket-logs');
	const userTicket = new RichEmbed()
		.setTitle(`${user} Ticket`)
		.addField('User ID', userID, false )
		.addField('Reason', ticket, false )
		.addField('Submitted on', today, false )
		.setColor(0xdd9323)
	ticketLogs.send(userTicket)

	console.log(ticket)
	console.log(user)


}