const discord = require('discord.js');
const client = new discord.Client();
const config = require("./config.json")

//fix if u want ;)
client.on("message", (message) => {
  if (message.content == config.prefix + "updates") {
    if (message.guild.roles.fetch(r => ["Updates"].includes(r.name))) {
      message.member.roles.remove(config.updaterole);
      message.channel.send(`${message.member} You will no longer get updates.`)
    }


    else {
      message.member.roles.add(config.updaterole);
      message.channel.send(`${message.member} You will now get updates.`)
      console.log('${member.message} has the role Mod Updates')
    }
  }
})

client.on('ready', () => {
  console.log('Role Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");