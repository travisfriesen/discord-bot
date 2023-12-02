const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')

client.on("message", async message => {
  
   if(message.content.indexOf(config.prefix) !== 0) return;
  
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === "purge") {

      if(!message.member.permissions.has('MANAGE_MESSAGES'))
        return message.reply("Hold up, you can't do that!");
      
       
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }
        var channel = message.channel.id
      
      await message.channel.bulkDelete(amount + 1)
        .catch(error => message.reply(`I couldn't purge the messages because of : ${error}`));
      message.reply(`${amount} messages have been deleted in <#${channel}>`)
    }
  
})


client.on('ready', () => {
  console.log('Purge Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");