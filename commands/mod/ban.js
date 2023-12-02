const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')

client.on("message", async message => {
  
   if(message.content.indexOf(config.prefix) !== 0) return;
  
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === "ban") {

      if(!message.member.permissions.has('BAN_MEMBERS'))
        return message.reply("Hold up, you can't do that!");
      
      let member = message.mentions.members.first();
      if(!member)
        return message.reply("Who do I ban?");
      if(!member.bannable) 
        return message.reply("This person has a higher rank than you, you can't ban that user");
  
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;
      
      await message.channel.bulkDelete(1)
       member.ban({reason: `Reason: ${reason}, Banned by: ${message.author.tag} (ID: ${message.author.id}), Banned on: ${today}`})
        .catch(error => message.reply(`I couldn't ban because of : ${error}`));
      message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`)
    }

    if(command === "unban") {

      if(!message.member.permissions.has('BAN_MEMBERS'))
        return message.reply("Hold up, you can't do that!");
      
       
        let bannedMember = args[0]
        if(!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

      
      await message.channel.bulkDelete(1)
      message.guild.members.unban(bannedMember)
        .catch(error => message.reply(`I couldn't unban <@${bannedMember.tag}> (${bannedMember}) because of : ${error}`));
      message.reply(`<@${bannedMember}> (${bannedMember}) has been unbanned.`)
    }
  
})


client.on('ready', () => {
  console.log('Ban Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");