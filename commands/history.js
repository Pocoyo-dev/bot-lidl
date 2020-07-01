const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

(module.exports.run = async (client, msg, args) => {
  var discordUser = args[0];

  if(!discordUser) {
    msg.reply('Syntaxe : ~drive **[PSEUDO]** **[ITEM]** **[QUANTITÉ]**')
  }

  const logPseudo = await fetch(
    `http://google-to-json.herokuapp.com/api?id=1HLmNeKCcd8IFIOBJcfYqH0SklF6YxN76JT8VsqqZWVo&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.pseudo);

  const logQuantity = await fetch(
    `http://google-to-json.herokuapp.com/api?id=1HLmNeKCcd8IFIOBJcfYqH0SklF6YxN76JT8VsqqZWVo&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.quantity);

  const logItem = await fetch(
    `http://google-to-json.herokuapp.com/api?id=1HLmNeKCcd8IFIOBJcfYqH0SklF6YxN76JT8VsqqZWVo&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.item);

  if (logPseudo === "undefined") {
    msg.reply(
      "Il n'y a aucune commandes à ce nom ! Veuillez réessayer ! Si vous pensez que ceci est une erreur veuillez contacter un administrateur du serveur."
    )
    return;
  }

  const search = ",";
  const replaceWith = "\n";

  const logItemMSG = `${logItem}`.split(search).join(replaceWith);
  const logQuantityMSG = `${logQuantity}`.split(search).join(replaceWith);
  const logPseudoMSG = `${logPseudo}`.split(search).join(replaceWith);

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
    .setFooter(
      "**Merci de votre fidélité !**",
      "Fait avec amour par Pocoyo ;3"
    );

  msg.reply(historyEmbed);
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
