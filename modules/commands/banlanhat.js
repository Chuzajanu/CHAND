const fs = require("fs");
module.exports.config = {
	name: "bạn là nhất",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Nhất bạn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("you are the best")==0 || (event.body.indexOf("You are the best")==0)) {
		var msg = {
				body: "Mày là nhất :) Nhất mày luôn rồi",
				attachment: fs.createReadStream(__dirname + `/noprefix/banlanhat.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}