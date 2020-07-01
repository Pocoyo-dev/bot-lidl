const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

module.exports.run = async (client, msg, args) => {
  const helpEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Page d<aide")
    .setDescription("Some description here")
    .addFields(
      { name: "~drive **[PSEUDO]** **[ITEM]** **[QUANTITÉ]**", value: "Envoie une commande au **Lidl Drive**", inline: true },
      { name: "~history **[PSEUDO || DATE]**", value: "Affiche votre historique de commandes", inline: true }
    )
    .setFooter("Fait avec amour par Pocoyo ;3");

  msg.channel.send(helpEmbed);
};

module.exports.help = {
  name: "help",
};
