const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
const fs = require("fs");

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsFile = files.filter((f) => f.split(".").pop() === "js");
  if (jsFile.length <= 0) {
    console.log("Aucune commande à ce nom");
    return;
  }

  jsFile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
  });
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

client.on("message", async (msg) => {
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  let prefix = config.prefix;
  let messageArray = msg.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile = client.commands.get(command.slice(prefix.length));
  if (commandFile) commandFile.run(client, msg, args);
});

client.login(process.env.TOKEN);
