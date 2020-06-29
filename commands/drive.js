const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");

module.exports.run = async (client, msg, args) => {

  if(!args[0]) msg.reply("Il vous faut tous les arguments pour passer une commande \:p")

  const discordUser = message.author.display_name;


  const data = {
    email:
      "TrkqfcYTzCkSzT4W5FLcFNnYsA42ckgIn5GNeoP8BORujj+PYUjRBrDl5ofOU/vh5KqSH+a1CbEkKcVc0SFQTN6SohKih/r4zlu4Vgh9XiheRMTMgLiD8NeUo6aAPu8V",
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
    })

  msg.reply("Merci d'avoir passé une commande avec Lidl Drive !");
};

module.exports.help = {
  name: "drive",
};
