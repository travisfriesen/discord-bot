const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')

client.on("message", async message => {
  
   if(message.content.indexOf(config.prefix) !== 0) return;
  
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === "lock") {

      if(!message.member.permissions.has('MANAGE_CHANNELS'))
        return message.reply("Hold up, you can't do that!");
  
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";

      var channel = message.channel.id
      var guilda = message.guild
      
      await message.channel.bulkDelete(1)
      message.channel.createOverwrite(
        guilda.id,
          { 'SEND_MESSAGES': false,
        'ADD_REACTIONS': false}, 'locked'
      )
        .catch(error => message.reply(`I couldn't lock this channel because of : ${error}`));
      message.reply(`<#${channel}> has been locked, because of ${reason}.`)
    }

    if(command === "unlock") {

      if(!message.member.permissions.has('MANAGE_CHANNELS'))
        return message.reply("Hold up, you can't do that!");
  
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";

      var channel = message.channel.id
      var guilda = message.guild
      
      await message.channel.bulkDelete(1)
      message.channel.createOverwrite(
        guilda.id,
          { 'SEND_MESSAGES': true,
        'ADD_REACTIONS': true}, 'unlocked'
      )
        .catch(error => message.reply(`I couldn't unlock this channel because of : ${error}`));
      message.reply(`<#${channel}> has been unlocked.`)
    }
  
})


client.on('ready', () => {
  console.log('Lock Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");