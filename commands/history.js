const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

(module.exports.run = async (client, msg, args, time) => {
  var discordUser = args[0];

  if (!discordUser) {
    msg.reply("Syntaxe : ~history **[PSEUDO || DATE]**");
    return;
  }

  const logPseudo = await fetch(
    `https://spreadsheet-to-json.pocoyobots.repl.co/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.pseudo);

  const logQuantity = await fetch(
    `https://spreadsheet-to-json.pocoyobots.repl.co/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.quantity);

  const logItem = await fetch(
    `https://spreadsheet-to-json.pocoyobots.repl.co/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.item);

  if (logPseudo === "undefined") {
    msg.reply(
      "Il n'y a aucune commandes à ce nom ! Veuillez réessayer ! Si vous pensez que ceci est une erreur veuillez contacter un administrateur du serveur."
    );
    return;
  }

  const search = ",";
  const replaceWith = "\n";

  const logItemMSG = `${logItem}`.split(search).join(replaceWith);
  const logQuantityMSG = `${logQuantity}`.split(search).join(replaceWith);
  const logPseudoMSG = `${logPseudo}`.split(search).join(replaceWith);

  if (logPseudoMSG === "undefined") {
    msg.reply(
      "Nous n'avons aucune commande qui correspond à l'argument que vous avez donné ! Si vous pensez que celui-ci est valide, veuillez réessayer plus tard, ou contacter un administrateur."
    );
    return;
  }

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
    .setDescription(
      "**Merci de votre fidélité !**",
    )
    .setFooter("Fait avec amour par Pocoyo")

  msg.channel.send(historyEmbed);
}),

module.exports.help = {
  name: "history",
};
