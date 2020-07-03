module.exports = (bot, msg) => { 
	// execute(msg) {
		let blockList = ["badword", "badword1", "badword2"];

		// check the msg for a blockList content
		let foundWord = false;
		blockList.forEach((bl, i) => {
			if(msg.content.toLowerCase().includes(blockList[i])) foundWord = true;
		})

		if(foundWord) {
			msg.delete();
			msg.channel.send("Badword detected");
		}

	// }
	
}
