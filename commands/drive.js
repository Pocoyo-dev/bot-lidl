

const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");
const commandLog = require("./command-logs.json");

module.exports.run = async(client, msg, args) => {
	if (!args[0])
		msg.reply(
			"Syntaxe : `;drive (Pseudo en jeu) (Item commandé) (Quantité en stacks)`"
		);

	const discordUser = msg.member.user.tag;

	const data = {
		email: "TrkqfcYTzCkSzT4W5FLcFNnYsA42ckgIn5GNeoP8BORujj+PYUjRBrDl5ofOU/vh5KqSH+a1CbEkKcVc0SFQTN6SohKih/r4zlu4Vgh9XiheRMTMgLiD8NeUo6aAPu8V",
		form: {
			title: "[BOT LIDL] Mobirise Form",
			data: [
				["Pseudo In-Game", `${args[0]}`],
				["Item commandé", `${args[1]}`],
				["Nombre commandé", `${args[2]}`],
				["Site", `lidl.mrholly70.fr`],
				["Pseudo Discord", `${discordUser}`],
			],
		},
	};

	axios
		.post("https://formoid.net/api/push", data)
		.then((res) => {
			console.log(`Status: ${res.status}`);
			console.log("Body: ", res.data);
		})
		.catch((err) => {
			console.error(err);
		});

	msg.reply("Merci d'avoir passé une commande avec Lidl Drive !");

	let commandDrive = `Vous avez commandé sous le nom de ${args[0]} ${args[2]} de ${args[1]}`

	var fs = require("fs");
	var sampleObject = {
		`${discordUser}` : {
			name: `${args[0]}`,
			item: `${args[1]}`,
			quantity: `${args[2]}`
		}
	};

	fs.writeFile("./command-log.json", JSON.stringify(sampleObject, null, 4), (err) => {
		if (err) {
			console.error(err);
			return;
		};
		console.log("File has been created");
	});
};

module.exports.help = {
	name: "drive",
};

