const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log('I am ready!');
  console.log(`Logged into ${client.user.tag}`);
  client.user.setStatus('Online')
  client.user.setActivity("Games")
  //const roleadd = require("./commands/useful/roleadd.js");
  const about = require("./commands/useful/about.js");
  const info = require("./commands/useful/info.js");
  const help = require("./commands/help.js");
  const welcome = require("./commands/welcome.js");
  const kick = require("./commands/mod/kick.js");
  const ban = require("./commands/mod/ban.js");
  const purge = require("./commands/mod/purge.js");
  const slowmode = require("./commands/mod/slowmode.js");
  const lock = require("./commands/mod/lock.js");
  const ssh = require("./commands/ssh.js");
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content == config.prefix + "latency") {
    message.channel.send("Pinging...").then(msg => {
      var ping = msg.createdTimestamp - message.createdTimestamp;
      var botPing = Math.round(client.ws.ping);
      msg.edit(`Bot Ping: ${ping}ms\nAPI Ping: ${botPing}ms`);
    });
  }
});

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");