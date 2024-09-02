module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "PREM BABU",
  description: "Notify bots or people entering the group",
  dependencies: {
    "fs-extra": ""
  }
};
module.exports.run = async function({ api, event }) {

  const request = require("request");
  const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`${global.config.BOTNAME} 【 ${global.config.PREFIX} 】`, threadID, api.getCurrentUserID());
    return api.sendMessage(`┏━━━━━━┓\n    आरिफ-बाबू                    ♥️┄┅══❁🙂❁══┅┄♥️\n┗━━━━━━┛\n♥️✧═════════•❁❀❁•═════════✧♥️\n\n𒁍 [ BOT OWNER ]  →     ♥️ आरिफ बाबू ♥️\n𒁍 [  NOTICE ] → कोई बोट को गली नही देगा अगर किसी ने बिना फालतू के गली देगा उसकी आई डी बैन कर दी जाएगी\n𒁍 [ USER NOTICE ] → बोट को बार बार एड और रिमूव न करे नही तो आपका ग्रुप बैन कर दिया जाएगा 🙂✋\n𒁍 [ COMMANDS ]  →     #help \n\nTHIS BOT CREATER IS ARIF BABU\n\n𒁍 [ PREFIX ] →      # \n𒁍 [ FACEBOOK ID ] → https://www.facebook.com/profile.php?id=61553634015672&mibextid=kFxxJD\n𒁍 [ OWNER ] →  MR ARIF BABU\n𒁍 [ APPROVAL ] →   #request`, threadID);
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
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  

        nameArray.push(userName);
        mentions.push({ tag: userName, id: userID, fromIndex: 0 });

        memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "┏━━━━━┓\n     आरिफ-बाबू              ✧═•❁𝗪𝗘𝗟𝗖𝗢𝗠𝗘❁•═✧\n┗━━━━━┛\n\n\nHello 𒁍 {name} {type}\nWelcome To {threadName}\n════════════════════════ ❁\nMY BOSS  𒁍 MR ARIF BABU 🌺\n════════════════════════ ❁\nFACEBOOK ID LINK 🔗 𒁍 https://www.facebook.com/profile.php?id=61553634015672&mibextid=kFxxJD\n════════════════════════ ❁\n𝖬𝖮𝖲𝖳 𝖶𝖤𝖫𝖢𝖮𝖬𝖤 𝖳𝖮 ARIF 𝖡𝖠𝖡U 𝖡𝖮𝖳\n════════════════════════ ❁\nBOT UPDATING 𒁍 MR ARIF BABU 🌺\n════════════════════════ ❁\n\nलत तेरी ही लगी है....................... 🌺\nनशा सरेआम होगा....................... 🌺\nहर लम्हा तुम्हारे लबों पे.................. 🌺\nसिर्फ आरिफ बाबू का ही नाम होगा.........🌺\nआप इस ग्रुप के {soThanhVien}Th मेंबर हो...........🐥\n════════════════════════ ❁\n\nWISH YOU HAVE A GOOD {session}\n{time} ♥️🌺♥️🌺♥️": msg = threadData.customJoin;
      msg = msg
      .replace(/\{uName}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);			

      var link = [
"https://imgur.com/a/VQUQvid/1..gif",
"https://imgur.com/a/VQUQvid/1..gif",
"https://imgur.com/a/VQUQvid/1..gif",
"https://imgur.com/a/VQUQvid/1..gif",
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
