// const exports = require("./exports");

exports.run = (bot, msg, args) => {
	msg.channel.send("Pong bitch!").catch(console.error);
}