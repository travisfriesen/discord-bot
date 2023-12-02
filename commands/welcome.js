const discord = require('discord.js');
const client = new discord.Client();
const config = require("./config.json")

client.on("guildMemberAdd", (member) => {
  const welcome = member.guild.channels.cache.find(ch => ch.name === 'general');
  var rules = member.guild.channels.cache.find(ch => ch.name === 'rules').toString();
  var info = member.guild.channels.cache.find(ch => ch.name === 'info').toString();
  welcome.send(`${member.user}, Welcome to the Section Five discord server! Please make sure to read ${rules} and ${info}`)
});

client.on("guildMemberRemove", (member) => {
  const welcome = member.guild.channels.cache.find(ch => ch.name === 'general');
  welcome.send(`${member.user.tag} has left the server. (User ID: ${member.user.id})`);
});

client.on('ready', () => {
  console.log('Welcome Class')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");