const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')

client.on("message", (message) => {
  if (message.content == config.prefix + "info") {
    var embed = new discord.MessageEmbed;

    embed.setTitle("Server Info")
      .setColor('#8bc1ed')
      .setThumbnail(message.guild.iconURL)
      .addField(message.guild.name, `Members: ${message.guild.memberCount}`)
      .addField("Location", message.guild.region)
      .addField("Owner", message.guild.owner)
      .addField(`Created on`, message.guild.createdAt)
      .setTimestamp()
    message.channel.send(embed);
  }
})

client.on("message", async message => {
  

  if (message.content == config.prefix + "userinfo") {
        var embed2 = new discord.MessageEmbed;
        let member = message.mentions.members.first()
      if(!member)
        return message.reply("You didn't mention anyone.");
      
      embed2.setTitle("User Info")
      .setColor('#8bc1ed')
      .setThumbnail(member.displayAvatarURL)
      .addField("Name", member.name)
      .addField("User ID", member.id)
      .addField(`Account created on`, member.createdAt)
      .setTimestamp()
      await message.channel.send(embed2);
    }
 
})

client.on('ready', () => {
  console.log('Info Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");