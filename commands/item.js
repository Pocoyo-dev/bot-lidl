const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

module.exports.run = async (client, msg, args, time) => {
  const itemListBlocs =
    "GrassBlock \n Dirt \n Cobble \n Stone \n Oakleaves \n DarkOakLeaves \n SpruceLeaves";
  const itemListColorants = "BoneMeal \n InkSac";
  const itemListBouffes = "Morue \n Melon \n Mouton";
  const itemListMinerais = "Fer";
  const itemListOther = "Cuir \n Oeuf \n Citrouille \n Kelp";

  const itemListEmbed = new Discord.MessageEmbed()
    .setColor("")
    .setColor("#0099ff")
    .setTitle("Liste d'items LIDL J2C")
    .addFields(
        {name: "BLOCS",value: `${itemListBlocs}`, inline: true},
        {name: "COLORANTS",value: `${itemListColorants}`, inline: true},
        {name: "BOUFFE",value: `${itemListBouffes}`, inline: true},
        {name: "MINERAI",value: `${itemListMinerais}`, inline: true},
        {name: "AUTRE",value: `${itemListOther}`, inline: true}
        )

  msg.reply(itemListEmbed);
};

module.exports.help = {
  name: "item",
};
