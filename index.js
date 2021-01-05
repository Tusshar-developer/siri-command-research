const request = require("request");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => console.log("Ready!"));

client.on("message", (message) => {
  if (message.author.bot || message.channel.type === "dm") return;

  let args = message.content.split(/ +/);
  let command = args.shift().toLowerCase();

  let userLocation = args[0];


  // npm i discord-canvas
  const currentFile = require("./commands/current.js");
  const current = (userLocation) => currentFile.current(message, userLocation);

  if (command === 'temp') {
    current(userLocation);
  }

});

const config = require("./config.json");
client.login(config.token);