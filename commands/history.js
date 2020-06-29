const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");
const sheetsu = require("sheetsu-node");
const sheetClient = sheetsu({
  address: "https://sheetsu.com/apis/v1.0su/0600bbb58ade",
});

module.exports.run = async (client, msg, args) => {
  const discordUser = msg.member.user.id;

  sheetClient.read({ search: { DISCORD: discordUser } }).then(
    function (data) {
      console.log(data);
      const dataMSG = data;

      var msgData2 = `${dataMSG}`;
      msgData2 = msgData2.replace("[", " ");
      msgData2 = msgData2.replace("]", " ");
      msgData2 = msgData2.replace("},{", ",");
    

      const json = `${msgData2}`;
      const finalMessage = JSON.parse(json);

      msg.reply(
        `Vous avez commandé **${finalMessage.QUANTITY}**de **${finalMessage.ITEM}** sous le pseudo **${finalMessage.PSEUDO}** le **${finalMessage.TIME}**`
      );
    },
    function (err) {
      console.log(err);
    }
  );
};

module.exports.help = {
  name: "history",
};

