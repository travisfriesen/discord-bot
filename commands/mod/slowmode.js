const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')

client.on("message", async message => {
  
   if(message.content.indexOf(config.prefix) !== 0) return;
  
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === "slowmode") {

      if(!message.member.permissions.has('MANAGE_CHANNELS'))
        return message.reply("Hold up, you can't do that!");
      
       
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }
        var channel = message.channel.id
      
      await message.channel.bulkDelete(1)
      message.channel.setRateLimitPerUser(amount)
        .catch(error => message.reply(`I couldn't update the slowmode because of : ${error}`));
      message.reply(`Slowmode has been activated in <#${channel}> for ${amount} seconds`)
    }
  
})


client.on('ready', () => {
  console.log('Slowmode Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");