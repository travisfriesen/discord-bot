const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')
var ssh = require('simple-ssh');

var sshuser = new ssh({
    host: 'hostname',
    user: 'username',
    pass: 'password'
});

client.on("message", async message => {
    if(message.author.id == 671937135305162768) {
  
   if(message.content.indexOf(config.prefix) !== 0) return;
  
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === "ssh") {  
      let reason = args.slice(1).join(' ');
      if(!reason) return ("please say a command")

         

      await sshuser.exec(reason)
      message.reply(`${reason} has been executed`)
    }
}
else {
    return ("u aren't uk, don't try this or ban")
}
  
})


client.on('ready', () => {
  console.log('SSH Command')
})

client.login("NTQwNjg1MjAzODYyMTkyMTM4.XxKLqg.FxjCoCAvgUPq9w32mLMDC1sO4nI");