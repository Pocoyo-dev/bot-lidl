const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

(module.exports.run = async (client, msg, args) => {
  const discordUser = args[0] || msg.author.id;

  const logPseudo = await fetch(
    `http://gsx2json.com/api?id=1HLmNeKCcd8IFIOBJcfYqH0SklF6YxN76JT8VsqqZWVo&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.pseudo);

  const logQuantity = await fetch(
    `http://gsx2json.com/api?id=1HLmNeKCcd8IFIOBJcfYqH0SklF6YxN76JT8VsqqZWVo&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.quantity);

  const logItem = await fetch(
    `http://gsx2json.com/api?id=1HLmNeKCcd8IFIOBJcfYqH0SklF6YxN76JT8VsqqZWVo&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.item);

  if (!logPseudo) {
    msg.reply(
      "Il n'y a aucune commandes à ce nom ! Veuillez réessayer ! Si vous pensez que ceci est une erreur veuillez contacter un administrateur du serveur."
    );
  }

  var logItemMSG = logItem.toString().replace(",", "\n");
  var logQuantityMSG = logQuantity.toString().replace(",", "\n");
  var logPseudoMSG = logPseudo.toString().replace(",", "\n");

  const historyEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Historique de vos commandes")
    .addFields(
      {
        name: "PSEUDO",
        value: `${logPseudoMSG}`,
        inline: true,
      },
      {
        name: "ITEM",
        value: `${logItemMSG}`,
        inline: true,
      },
      {
        name: "QUANTITÉ",
        value: `${logQuantityMSG}`,
        inline: true,
      }
    )
    .setFooter("Fait avec amour par Pocoyo ;3");

  msg.channel.send(historyEmbed);
}),
  function (err) {
    console.log(err);
    msg.reply(
      "Désolé mais un bug est survenu du côté du site ! Nous ne pouvons rien y faire, réessaie plus tard :("
    );
  };

module.exports.help = {
  name: "history",
};
