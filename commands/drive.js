const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");
const request = require("request");
const itemList = require("../itemlist.json");
const nodemailer = require("nodemailer")

module.exports.run = async (client, msg, args) => {
  if (!args[0]) {
    msg.reply(
      "Syntaxe : `~drive (Pseudo en jeu) (Item commandé) (Quantité en stacks)`"
    );
    return;
  }

  let itemVerification = itemList[args[1]];

  if (!itemVerification) {
    msg.reply(
      "Cet item n'est pas en vente au LIDL J2C. Veuillez vous référer à la liste d'items vendu en faisant **lidl!list**"
    );
    return;
  }

  if (itemVerification === "false") {
    msg.reply("Cet item est actuellement hors-stock. Désolé !");
    return;
  }

  if (itemVerification === "true") {


      const discordUser = msg.member.user.id;

      async function emailSend() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let tempAccount = await nodemailer.createTestAccount();
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: tempAccount.user, // generated ethereal user
            pass: tempAccount.pass, // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"COMMANDE LIDL J2C" <commandes@lidlj2c.fr>', // sender address
          to: "blackfrog732@stempmail.com", // list of receivers
          subject: "COMMANDE BOT LIDL J2C", // Subject line
          text: "Bonjour ! Une commande a été passée via le bot ! \n Pseudo En Jeu :" + args[0] + "\n Item :" + args[1] + "\n Quantité :" + args[2] + "\n Discord" + discordUser + "\n \n Bonne chance !", // plain text body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      
      }
      
      emailSend().catch(console.error);

/*      const data = {
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
        }); */

      const confirmationEmbed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle(
          "Votre commande est passée ! Allez voir vos MP pour confirmer celle-ci !"
        );
      msg.reply(confirmationEmbed).then(function (msg) {
        msg.react("👍");
      });

      const confirmationEmbedDM = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Commande LIDL J2C")
        .addFields({
          name: "Lien de confimation",
          value: `[Lien de confirmation](https://docs.google.com/forms/d/e/1FAIpQLSePBqQqwbD42wd6A41ATDzKaxFfeTRWuHgkgWL3AvJkqmcP2Q/formResponse?usp=pp_url&entry.1818559927=${args[0]}&entry.86871255=${args[1]}&entry.46215118=${args[2]}&entry.740390018=${discordUser}&submit=Submit)`,
        });
      msg.author.send(confirmationEmbedDM);
    }
};

module.exports.help = {
  name: "drive",
};
