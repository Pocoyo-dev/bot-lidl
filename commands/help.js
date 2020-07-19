const Discord = require("discord.js");

module.exports.run = async (client, msg, args, time) => {
  const helpEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Page d'aide")
    .addFields(
      { name: "lidl!drive **[PSEUDO]** **[ITEM]** **[QUANTITÉ]**", value: "Envoie une commande au **Lidl Drive**", inline: true },
      { name: "lidl!history **[PSEUDO || DATE]**", value: "Affiche votre historique de commandes", inline: true },
      { name: " \u200b ",
        value: " \u200b "
      },
      { name: "lidl!item", value: "Affiche la liste d'items vendus", inline: true },
      { name: "lidl!price **[ITEM]**", value: "Affiche le prix de l'item", inline: true }
    )
    .setDescription(
      "**Merci de votre fidélité !**",
      "Fait avec amour par Pocoyo ;3"
    );

  msg.channel.send(helpEmbed);
};

module.exports.help = {
  name: "help",
};
