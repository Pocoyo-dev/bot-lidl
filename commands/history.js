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

  const logQuantity = await fetch(
    `http://gsx2json.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.quantity);

  const logItem = await fetch(
    `http://gsx2json.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.item);


  msg.reply(
    `Les commandes ont étées passées de **${logQuantity}** de **${logItem}** sous le pseudo **${logPseudo}**`
  );
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
