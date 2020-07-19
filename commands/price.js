const Discord = require("discord.js");
const itemlist = require("../itemlist.json")

module.exports.run = async (client, msg, args, time) => {
  if(!args[0])  {
    msg.channel.send("Syntaxe : `lidl!price (Item)`");
  }

  const priceStack = itemlist[args[0]].price;

  console.log(priceStack)

  msg.channel.send(`L'item **${args[0]}** est en vente au prix de **${priceStack}** émeraudes par stack`);
};

module.exports.help = {
  name: "price",
};
