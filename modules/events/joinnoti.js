module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "ARIF BABU",
        description: "Notify bots or people entering the group",
        dependencies: {
                "fs-extra": ""
        }
};
module.exports.run = async function({ api, event }) {

        const request = require("request");
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`【 ${global.config.PREFIX} 】 ${global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                return api.sendMessage(`${global.config.BOTNAME}\n\nThank you for inviting me to the group!\n\nBot prefix: 【 ${global.config.PREFIX} 】\n\nTo view the list of commands, please enter: Help`, threadID);
        }
        else {
                try {
    const request = require("request");
                        const fs = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};

                        var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");             if (userID !== api.getCurrentUserID()) {  

                                nameArray.push(userName);
                                mentions.push({ tag: userName, id: userID, fromIndex: 0 });

                                memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "┏━━━━━┓\n    आरिफ-बाबू               ✧═•❁𝗪𝗘𝗟𝗖𝗢𝗠𝗘❁•═✧\n┗━━━━━┛\n\n\nHello 𒁍 ${name}\nWelcome To ${threadname}\n════════════════════════ ❁\nMY BOSS  𒁍 MR ARIF BABU 🌺\n════════════════════════ ❁\nFACEBOOK ID LINK 🔗 𒁍 $https://www.facebook.com/profile.php?id=61553634015672&mibextid=kFxxJD\n════════════════════════ ❁\n𝖬𝖮𝖲𝖳 𝖶𝖤𝖫𝖢𝖮𝖬𝖤 𝖳𝖮 ARIF 𝖡𝖠𝖡U 𝖡𝖮𝖳\n════════════════════════ ❁\nBOT UPDATING 𒁍 MR ARIF BABU 🌺\n════════════════════════ ❁\n\nलत तेरी ही लगी है....................... 🌺\nनशा सरेआम होगा....................... 🌺\nहर लम्हा तुम्हारे लबों पे.................. 🌺\nसिर्फ आरिफ बाबू का ही नाम होगा.........🌺\nआप इस ग्रुप के {soThanhVien}th मेंबर हो...........🐥\n════════════════════════ ❁\n         खाओ पियो और मेरे साथ मस्ती करो 🙂♥️" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{uName}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);                        

      var link = [
"https://imgur.com/a/gsxFRHj/mp4",
      ];
                                var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
                  }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
        }
                                                  } 
