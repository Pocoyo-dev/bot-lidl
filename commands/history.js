const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

(module.exports.run = async (client, msg, args) => {
  const discordUser = msg.member.user.id;

  const log1Time = await fetch(
    `https://google-to-json.herokuapp.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}.herokuapp.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.rows.horodateur);

  const log1Pseudo = await fetch(
    `https://google-to-json.herokuapp.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}.herokuapp.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.rows.pseudo);

  const log1Quantity = await fetch(
    `https://google-to-json.herokuapp.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}.herokuapp.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.rows.quantité);

  const log1Item = await fetch(
    `https://google-to-json.herokuapp.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}.herokuapp.com/api?id=1LGEDEHkI0WBgzxtG7UidGO-m-gn9qNIPQk4o0jOVhLk&q=${discordUser}`
  )
    .then((res) => res.json())
    .then((json) => json.rows.pseudo);
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
