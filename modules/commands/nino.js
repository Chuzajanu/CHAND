module.exports.config = {
    name:"nino",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Talk to the cute nino bot",
    commandCategory: "General",
    usages: "[question]/[on,off]",
    cooldowns: 5
};

const axios = require('axios');

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'nino.json');
    if (!existsSync(path)) {
        const obj = {
            nino: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('nino')) data.nino = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.handleEvent = async ({ api, event, args, Threads }) => {
    const { threadID, messageID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'nino.json');
    const { nino } = require(path);

    if (nino.hasOwnProperty(threadID) && nino[threadID] == true) {
      if (event.senderID !== api.getCurrentUserID()) {
      axios.get(encodeURI(`https://adreno-api.rootandroid.repl.co/nino/get/${event.body}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "I don't understand what you say :<") {
                api.sendMessage("nino doesn't understand, teach nino :<",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
    })
    }  
    }
}

module.exports.run = async ({ api, event, args, Threads }) => {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'nino.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { nino } = database;

    if (!args[0]) { api.sendMessage("oh just ask ;-;", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                nino[threadID] = true;
                api.sendMessage("successfully enabled ninoreply!", threadID);
                break;
            }
            case "off": {
                nino[threadID] = false;
                api.sendMessage("ninoreply turned off", threadID);
                break;
            }
            default:
            axios.get(encodeURI(`https://adreno-api.rootandroid.repl.co/nino/get/${args.join(" ")}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "I don't understand what you say :<") {
                api.sendMessage("nino doesn't understand, teach nino :<",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
            });
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
}