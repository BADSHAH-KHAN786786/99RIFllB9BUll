module.exports.config = {
  name: "sing",
  version: "1.0.",
  hasPermssion: 0,
  credits: "AYAN CHOWDHURY",//dont change credit😠
  description: "experts",
  commandCategory: "play music",
  usages: "send music",
  cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
 const axios = require("axios");
 const fs = require("fs-extra");
 const ytdl = require("@distube/ytdl-core");
 const request = require("request");
 const yts = require("yt-search");

 const input = event.body;
 const text = input.substring(12);
 const data = input.split(" ");

 if (data.length < 2) {
	return api.sendMessage("Please put a song", event.threadID);
 }

 data.shift();
 const song = data.join(" ");

 try {
	api.sendMessage(`Finding "${song}". Please wait...`, event.threadID);

	const searchResults = await yts(song);
	if (!searchResults.videos.length) {
	 return api.sendMessage("Error: Invalid request.", event.threadID, event.messageID);
	}

	const video = searchResults.videos[0];
	const videoUrl = video.url;

	const stream = ytdl(videoUrl, { filter: "audioonly" });

	const fileName = `${event.senderID}.mp3`;
	const filePath = __dirname + `/cache/${fileName}`;

	stream.pipe(fs.createWriteStream(filePath));

	stream.on('response', () => {
	 console.info('[DOWNLOADER]', 'Starting download now!');
	});

	stream.on('info', (info) => {
	 console.info('[DOWNLOADER]', `Downloading ${info.videoDetails.title} by ${info.videoDetails.author.name}`);
	});

	stream.on('end', () => {
	 console.info('[DOWNLOADER] Downloaded');

	 if (fs.statSync(filePath).size > 26214400) {
		fs.unlinkSync(filePath);
		return api.sendMessage('[ERR] The file could not be sent because it is larger than 25MB.', event.threadID);
	 }

	 const message = {
		body: `<< 𝗦𝗜𝗡𝗚 >> | 𝗔𝗬𝗔𝗡 𝗥𝗢𝗕𝗢𝗧\n━━━━━━━━━━━━━━━━━━━\n\n𝐄𝐧𝐣𝐨𝐲 𝐲𝐨𝐮𝐫 𝐦𝐮𝐬𝐢𝐜 𝐰𝐢𝐭𝐡  𝐀𝐘𝐀𝐍 𝐑𝐎𝐁𝐎𝐓 ♡🥀🎵🥰\n\nTitle: ${video.title}\nArtist: ${video.author.name}`,
		attachment: fs.createReadStream(filePath)
	 };

	 api.sendMessage(message, event.threadID, () => {
		fs.unlinkSync(filePath);
	 });
	});
 } catch (error) {
	console.error('[ERROR]', error);
	api.sendMessage('An error occurred while processing the command.', event.threadID);
 }
};
