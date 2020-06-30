const Discord = require("discord.js");
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");
const spotify = require("spotify");

module.exports.run = async (client, msg, args) => {

    spotify.add(`${args[0]}`);
    spotify.join();

};

module.exports.help = {
  name: "spotify",
};
