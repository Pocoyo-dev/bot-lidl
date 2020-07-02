const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");
const request = require("request");

module.exports.run = async (client, msg, args) => {
  ///https://docs.google.com/forms/d/e/1FAIpQLSePBqQqwbD42wd6A41ATDzKaxFfeTRWuHgkgWL3AvJkqmcP2Q/formResponse?usp=pp_url&entry.1818559927=${args[0]}&entry.86871255=${args[1]}&entry.46215118=${args[2]}&entry.740390018=${discordUser}&submit=Submit
  if (!args[0])
    msg.reply(
      "Syntaxe : `~drive (Pseudo en jeu) (Item commandé) (Quantité en stacks)`"
    );

  const discordUser = msg.member.user.id;

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
    });

    var requestBody = `entry.1818559927=` + args[0] + `&entry.86871255=` + args[1] + `&entry.46215118=` + args[2] + `&entry.740390018=` + discordUser + `&fvv=1&draftResponse=%5Bnull%2Cnull%2C%22-3914117450383777137%22%5D%0D%0A&pageHistory=0&fbzx=-3914117450383777137`

    app.use(function(req, res, next) {
      req.rawBody = requestBody;
      req.setEncoding('utf8');
    
      req.on('data', function(chunk) { 
        req.rawBody += chunk;
      });
    
      req.on('end', function() {
        next();
      });
    });

    request.post(
      {url:'https://docs.google.com/forms/u/0/d/e/1FAIpQLSePBqQqwbD42wd6A41ATDzKaxFfeTRWuHgkgWL3AvJkqmcP2Q/formResponse',
      body : req.rawBody,
      headers: {'Content-Type': 'text/xml'}
      },
      function (error, response, body) {        
          if (!error && response.statusCode == 200) {
              console.log(statusCode)
          }
      }
  );

  const confirmationEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Votre commande est passée !")
    .addFields({
      name:
        "Afin de confirmer votre commande, veuillez cliquer sur le lien ci-dessous",
      value: `[Lien de confirmation](https://docs.google.com/forms/d/e/1FAIpQLSePBqQqwbD42wd6A41ATDzKaxFfeTRWuHgkgWL3AvJkqmcP2Q/formResponse?usp=pp_url&entry.1818559927=${args[0]}&entry.86871255=${args[1]}&entry.46215118=${args[2]}&entry.740390018=${discordUser}&submit=Submit "Lien de confirmation")`,
    });
  msg.reply(confirmationEmbed).then(function (msg) {
    msg.react("👍");
  });
};

module.exports.help = {
  name: "drive",
};
