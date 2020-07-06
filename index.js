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

var blocklist = ["badword", "badword1", "badword2"];

bot.on("message", msg => {

// check the msg for a blockList content
		let foundWord = false;
		blocklist.forEach((blocked, i) => {
			if(msg.content.toLowerCase().includes(blocklist[i])) foundWord = true;
		})

		if(foundWord) {
			msg.delete();
			msg.channel.send("You cant say that mah dude");
		}
})

bot.login(TOKEN);