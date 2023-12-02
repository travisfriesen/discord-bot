const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')

client.on("message", async message => {
  
   if(message.content.indexOf(config.prefix) !== 0) return;
  
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
  
    if(command === "kick") {
        if(!message.member.permissions.has('KICK_MEMBERS') )    
         return message.reply("Hold up, you can't do that!");
       
         let member = message.mentions.members.first()
       if(!member)
         return message.reply("Who do I kick?");
       if(!member.kickable) 
         return message.reply("This person has a higher rank than you, you can't kick that user");
       
         let reason = args.slice(1).join(' ');
       if(!reason) reason = "No reason provided";
       
       await message.channel.bulkDelete(1)
       member.kick(`Reason: ${reason}, Kicked by: ${message.author.tag} (ID: ${message.author.id}), Kicked on: ${today}`)
         .catch(error => message.reply(`I couldn't kick ${member.user.tag} because of : ${error}`));
       message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`) 
     }
  
})

client.on('ready', () => {
  console.log('Kick Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");