require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const Enmap = require("enmap");

// const PREFIX = process.env.PREFIX;

bot.commands = new Enmap();

const TOKEN = process.env.TOKEN;




fs.readdir('./events/', (err, files) => {
	if(err) return console.error;
	files.forEach(file => {
		// If the file is not a JS file, ignore it
		if(!file.endsWith('.js')) return;
		// Load the event file itself
		const evt = require(`./events/${file}`);
		// Get just the event name from the file name
		let evtName = file.split('.')[0];
		//calls each command with all the proper arguments required.
		console.log(`Loaded '${evtName}'.`);
		bot.on(evtName, evt.bind(null, bot));
	});
});

fs.readdir("./commands/", (err, files) => {
	if(err) return console.log(err);
	files.forEach(file => {
		if(!file.endsWith(".js")) return;
		// Load the command file itself
		let props = require(`./commands/${file}`);
		// Get just the command name from the file name
		let commandName = file.split (".")[0];
		console.log(`Attempting to load command ${commandName}`);
		//Store the function in the command enmap. Not running the function as yet 
		bot.commands.set(commandName, props);
	})
})

bot.login(TOKEN);

// require('dotenv').config();
// const Discord = require('discord.js');
// const bot = new Discord.Client();
// bot.commands = new Discord.Collection();
// const botCommands = require('./commands/exports');
// const fs = require('fs');

// Object.keys(botCommands).map(key => {
// 	bot.commands.set(botCommands[key].name, botCommands[key]);
// });

// const TOKEN = process.env.TOKEN;
// // const PREFIX = process.env.PREFIX;



// fs.readdir('./events/', (err, files) => {
// 	if(err) return console.error;
// 	files.forEach(file => {
// 		if(!file.endsWith('.js')) return;
// 		const evt = require(`./events/${file}`);
// 		let evtName = file.split('.')[0];
// 		console.log(`Loaded '${evtName}'.`);
// 		bot.on(evtName, evt.bind(null, bot));
// 	});
// });

// bot.on('message', msg => {
// 	const args = msg.content.split(/ +/);
// 	const command = args.shift().toLowerCase();
// 	console.info(`Called command: ${command}`);

// 	if (!bot.commands.has(command)) return;
// 	// if (msg.author.bot) return;
// 	// if (msg.content.indexOf(PREFIX) !== 0) return "Missing prefix";
	

// 	try {
// 		bot.commands.get(command).execute(msg, args);
// 	} catch (error) {
// 		console.error(error);
// 		msg.reply('there was an error trying to execute that command!');
// 	}
// });

// bot.login(TOKEN);