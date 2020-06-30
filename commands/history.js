const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

(module.exports.run = async (client, msg, args) => {
  const discordUser = args[0];

  const log1Time = await fetch(
    `http://gsx2json.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.horodateur);

  const log1Pseudo = await fetch(
    `http://gsx2json.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.pseudo);

  const log1Quantity = await fetch(
    `http://gsx2json.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.quantité);

  const log1Item = await fetch(
    `http://gsx2json.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.columns.pseudo);


  msg.reply(
    `Vous avez commandé **${log1Quantity}** de **${log1Item}** sous le pseudo **${log1Pseudo}** le **${log1Time}**`
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
