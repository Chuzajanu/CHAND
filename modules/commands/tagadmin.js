module.exports.config = {
name: "tagadmin",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JustGon",//Giữ Credit tôn trọng thằng làm ra
	description: "tagadmin",
	commandCategory: "noprefix",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
        var reply = ["admin tag what do i do? use _callad","what do i do with admin tag, do you love me admin ?"];
        var replyrand = reply[Math.floor(Math.random() * reply.length)];
        var mention = Object.keys(event.mentions)[0]
	if (mention == global.config.ADMINBOT) {
		var msg = {
				body: replyrand
			}
			return api.sendMessage(msg, event.threadID, event.messageID);
		}
	}
module.exports.run = function({ api, event, client }) {

}