const fs = require("fs");
module.exports.config = {
        name: "chaumin",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "ARIF BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "chaumin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("chaumin")==0 || event.body.indexOf("Chaumin")==0 || event.body.indexOf("CHAUMIN")==0 || event.body.indexOf("chauminn")==0) {
                var msg = {
                                body: "😋𝐘𝐄 𝐋𝐏 𝐁𝐀𝐁𝐘 𝐂𝐇𝐀𝐔𝐌𝐈𝐌 😋",
                                attachment: fs.createReadStream(__dirname + `/ARIF-BABU/CHAUMIN.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍜", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
