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

  var body = `entry.1818559927=%24%7Bargs%5B0%5D%7D&entry.86871255=%24%7Bargs%5B1%5D%7D&entry.46215118=%24%7Bargs%5B2%5D%7D&entry.740390018=%24%7BdiscordUser%7D&fvv=1&draftResponse=%5Bnull%2Cnull%2C%22-3914117450383777137%22%5D%0D%0A&pageHistory=0&fbzx=-3914117450383777137`;
  var postRequest = {
    host: "docs.google.com",
    path:
      "/forms/u/0/d/e/1FAIpQLSePBqQqwbD42wd6A41ATDzKaxFfeTRWuHgkgWL3AvJkqmcP2Q/formResponse",
    port: 80,
    method: "POST",
    headers: {
      Cookie:
        "NID=204=hBVrV1C7p4ZrqX56ceNjqIOupZiTa8dQI6dZ0oHvnMacrnyrc1tga8-Wdad_aFPvLLC00g9wAtuSt7Vzzbi-I1evjvHBAYhXDfV3kuX8-n0ZruHmxC00pQR_Z60KV-izSiuB8unL0X5-1uv3Vp4Dh0gq9nOJ1BEGSO6QfVw1gMJDazuQ8qYSpMFsfoAqovqdIX53qbkmD8GM4E-F97ErpYl6kI2STC9t38fC4YBAhUWcTEzpM0fY6MzrjIqjoDqv2LI; 1P_JAR=2020-7-1-22; CONSENT=YES+CA.fr+202004; SEARCH_SAMESITE=CgQIi5AB; ANID=AHWqTUnta357U96XVXCPe0QZo2Fb5DkrebJ2yYdc7y5qTpE-5_avD7jQuc4A4pj7; SID=ygeKWHx6gV2zqIvaFjKHCfAjXMirFLW9iOsjd5jtJLYAdDcIKt8jsEfSWTmNYbGzJLfQOA.; __Secure-3PSID=ygeKWHx6gV2zqIvaFjKHCfAjXMirFLW9iOsjd5jtJLYAdDcIh76vo0ke0bzxXQAPYlvtUQ.; HSID=AKohoJjQqRfB46UwE; SSID=A9L3g2KhoVPzJWbYw; APISID=NApxQ_lcVG9ybQzM/AefpJ5Nhio3JMZ4s-; SAPISID=W-cuxZ9-9qFV-J0M/AdiBSnpeVfE7Y6Z1k; __Secure-HSID=AKohoJjQqRfB46UwE; __Secure-SSID=A9L3g2KhoVPzJWbYw; __Secure-APISID=NApxQ_lcVG9ybQzM/AefpJ5Nhio3JMZ4s-; __Secure-3PAPISID=W-cuxZ9-9qFV-J0M/AdiBSnpeVfE7Y6Z1k; SIDCC=AJi4QfG-k2QuflCWF3ANCk2RcSMNfbWFOlUSz8uu9VDfZ2UWE7dhODCGXUA0Y78aMG_sPq1Z2Vk",
      "Content-Type": "text/xml",
      "Content-Length": Buffer.byteLength(body),
    },
  };

  var buffer = "";

  var req = http.request(postRequest, function (res1) {
    console.log(res1.statusCode);
    var buffer = "";
    res.on("data", function (data1) {
      buffer = buffer + data1;
    });
    res.on("end", function (data1) {
      console.log(buffer);
    });
  });

  req.on("error", function (e) {
    console.log("problem with request: " + e.message);
  });

  req.write(body);
  req.end();

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
