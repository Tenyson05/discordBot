module.exports = {
	//any command created export them from here to the main index
	Ping: require('./ping'),
	kick: require('./kick'),
	ban: require('./ban'),
	chatMod: require('../events/chatMod'),
	ready: require('../events/ready'),
	test: require('./tets'),
	role: require('./reactionRoles')
};