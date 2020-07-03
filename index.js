require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands/exports');
const fs = require('fs');

Object.keys(botCommands).map(key => {
	bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;
// const PREFIX = process.env.PREFIX;



fs.readdir('./events/', (err, files) => {
	if(err) return console.error;
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		const evt = require(`./events/${file}`);
		let evtName = file.split('.')[0];
		console.log(`Loaded '${evtName}'.`);
		bot.on(evtName, evt.bind(null, bot));
	});
});

bot.on('message', msg => {
	const args = msg.content.split(/ +/);
	const command = args.shift().toLowerCase();
	console.info(`Called command: ${command}`);

	if (!bot.commands.has(command)) return;
	// if (msg.author.bot) return;
	// if (msg.content.indexOf(PREFIX) !== 0) return "Missing prefix";
	

	try {
		bot.commands.get(command).execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('There was an error trying to execute that command!');
	}
});

bot.login(TOKEN);