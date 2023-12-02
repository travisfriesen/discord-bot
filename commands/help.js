const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')

client.on("message", (message) => {
  if (message.content == config.prefix + "help") {
    var hembed = new discord.MessageEmbed;

    hembed.setTitle("Help")
      .setColor('#8bc1ed')
      .addField("/updates", "Adds or removes the Mod Updates role for you.")
      .addField("/latency", "Tells you the ping and latency of the bot.")
      .addField("/about", "A small thing about the team and the bot")
      .addField("/info", "Gives you info about the server your in.")
      .setFooter("Help Command")
      .setTimestamp()
    message.channel.send(hembed);
  }
  if (message.content == config.prefix + "modhelp") {
    if (message.guild.roles.fetch(r => ["moderatorgit"].includes(r.name))) {
      var hembed = new discord.MessageEmbed;

      hembed.setTitle("Moderator Help")
        .setColor('#8bc1ed')
        .addField("/kick (@user) {reason}", "Kicks the mentioned user with and optional reason.")
        .addField("/ban (@user) {reason}", "Bans the mentioned user with and optional reason.")
        .addField("/unban (userid)", "Unbans the user based on their user id. (unban reasons coming in the future)")
        .addField("/purge (amount of messages messages)", "Deletes the number of messages that you requested before this message.")
        .addField("/lock", "Locks the channel you send this in.")
        .addField("/unlock", "Unlocks the channel you send this in.")
        .addField("/slowmode (time)", "Activates slowmode in the channel you type this in for how long you mention. (time is in seconds)")
        //.setDescription("All commands with * do not work/are not implimented.")
        // all cmds are implimented now
        .setFooter("Help Command")
        .setTimestamp()
      message.channel.send(hembed);
    }
    else {
      message.channel.send("Hey you don't need this...")
    }
  }
})

client.on('ready', () => {
  console.log('Help Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");