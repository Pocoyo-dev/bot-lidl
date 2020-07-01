const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

(module.exports.run = async (client, msg, args) => {
  const discordUser = args[0] || msg.author.id;

  const logPseudo = await fetch(
    `http://gsx2json.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.pseudo);
  let logPseudoMSG = logItem.replace(",", /r/n);

  const logQuantity = await fetch(
    `http://gsx2json.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.quantity);
  let logQuantityMSG = logItem.replace(",", /r/n);

  const logItem = await fetch(
    `http://gsx2json.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.item);
  let logItemMSG = logItem.replace(",", /r/n);

  if (logPseudo === "undefined") {
    msg.reply(
      "Il n'y a aucune commandes à ce nom ! Veuillez réessayer ! Si vous pensez que ceci est une erreur veuillez contacter un administrateur du serveur."
    );
  }
  const historyEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Page d<aide")
    .setDescription("Some description here")
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
        inline: false,
      }
    )
    .setFooter("Fait avec amour par Pocoyo ;3");

  channel.send(historyEmbed);
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
