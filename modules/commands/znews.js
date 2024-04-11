module.exports.config = {
	name: "znews",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "HungCho",
	description: "Newspaper zingnews !",
	commandCategory: "news",
	usages: "d",
	cooldowns: 0,
dependencies: {"axios": "","cheerio": ""}
};

module.exports.run = async function({ api, event, args, __GLOBAL,Currencies }) {
    const request = require('request')
    var cheerio = require("cheerio")
    var chovui = request.get('https://zingnews.vn/', (error, response, html) => {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var thoigian = $('.time-count');
        var tieude = $('.thumb-art');
        var noidung = $('.description');
        var time = thoigian.find('span').attr('datetime');
        var title = tieude.find('a').attr('title');
        var des = noidung.find('a').text();
        var link = noidung.find('a').attr('href');
        var description = des.split('.');
       
        api.sendMessage(`Latest news\r\nPosting time: ${time}\r\nTitle: ${title}\r\n\nContent: ${description[0]}\r\nLink: ${link}\r\n\n`,event.threadID,event.messageID)
        }
}
)}