const Discord = require("discord.js");
const axios = require("axios");
const itemList = require("../itemlist.json");

module.exports.run = async (client, msg, args) => {

  // SYNTAXE

 try {
     if (!args[0]) {
    msg.reply(
      "Syntaxe : `lidl!drive (Pseudo en jeu) (Item commandé) (Quantité en stacks)`"
    );
    return;
  }

  // DROGUES

  if (args[1] === "ghb" || args[1] === "lsd" || args[1] === "cannabis" || args[1] === "beuh") {
    msg.channel.send("Oké j'appelle la police");
    return;
  }

  // VÉRIFICATION

  const itemVerification = itemList[args[1]].available;

  if (itemVerification === "false") {
    msg.reply("Cet item est actuellement hors-stock. Désolé !");
    return;
  }

  if (itemVerification === "true") {

  // SI ITEM EN STOCK EXÉCUTER CODE

  // PRIX

    let priceStack = itemList[args[1]].price;

    console.log(priceStack);

    let numberStack = args[2];

    let totalPriceRaw = priceStack * numberStack;

    if (totalPriceRaw > 9) {
      var totalPrice = totalPriceRaw / 9;
      var finalPrice = Math.floor(totalPrice) + "be";
    } else {
      var finalPrice = totalPriceRaw + "em";
    }

    // POST API EMAIL

    const discordUser = msg.author.id;
    const data = {
      email:
        "TrkqfcYTzCkSzT4W5FLcFNnYsA42ckgIn5GNeoP8BORujj+PYUjRBrDl5ofOU/vh5KqSH+a1CbEkKcVc0SFQTN6SohKih/r4zlu4Vgh9XiheRMTMgLiD8NeUo6aAPu8V",
      form: {
        title: "[BOT LIDL] Mobirise Form",
        data: [
          ["Pseudo In-Game", `${args[0]}`],
          ["Item commandé", `${args[1]}`],
          ["Nombre commandé", `${args[2]}`],
          ["Prix", `${finalPrice}`],
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

    // ENVOYER MESSAGE COMMANDE PUBLIC 

    const confirmationEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle(
        "Votre commande est passée ! Allez voir vos MP pour confirmer celle-ci !"
      )
      .setDescription(
        "**Merci de votre fidélité !**",
      )
      .setFooter("Fait avec amour par Pocoyo")
    msg.reply(confirmationEmbed).then(function(msg) {
      msg.react("👍");
    });

    //ENVOYER MESSAGE COMMANDE PRIVÉ

    const informationEmbedDM = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Commande LIDL J2C")
      .addFields(
        {
          name: "Lien de confimation",
          value: `[Lien de confirmation](https://docs.google.com/forms/d/e/1FAIpQLSePBqQqwbD42wd6A41ATDzKaxFfeTRWuHgkgWL3AvJkqmcP2Q/formResponse?usp=pp_url&entry.1818559927=${args[0]}&entry.86871255=${args[1]}&entry.46215118=${args[2]}&entry.740390018=${discordUser}&submit=Submit)`,
        },
        {
          name: "Informations sur la commande",
          value: `Pseudo : ${args[0]} \n Item : ${args[1]} \n Quantité : ${args[2]} stacks \n Prix : ${finalPrice}`,
        }
      )
      .setDescription(
        "**Merci de votre fidélité !**",
      )
      .setFooter("Fait avec amour par Pocoyo")
    msg.author.send(informationEmbedDM);
  }

  // CATCH ERROR

 } catch(e) {
   msg.channel.send("Cet item n'est pas en vente au LIDL J2C. Veuillez vous référer à la liste d'items vendu en faisant **lidl!item**");
 }
};


module.exports.help = {
  name: "drive",
};
