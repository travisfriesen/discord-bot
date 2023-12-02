const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')

client.on("message", (message) => {
  if (message.content == config.prefix + "about") {
    //var abouembed = new discord.MessageEmbed;
    var aboutembed = new discord.MessageEmbed;
    aboutembed.setTitle("About the bot!")
      .setColor('#d46c61')
      .setDescription('UK Bot')
      .addField("Current Version", "v2.0")
      .addField("Bot Created By:", "UKMinecrafted and Enderman842")
      .addField("Kick and Ban Commands By:", "Josia50, modified by UKMinecrafted")
      .setFooter("About Command")
      .setTimestamp()
    message.channel.send(aboutembed);
  }
})

client.on('ready', () => {
  console.log('About Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");