const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json')

client.on("message", (message) => {
    
  if (message.content.toLowerCase() == "bot") {
    var int = Math.floor((Math.random() * 10) + 1)
    if (int = 1) {message.channel.send("Did someone say my name?")    }
    if (int = 2) {message.channel.send("What do you want, I was napping.")    }
    if (int = 3) {message.channel.send("I heard that!")    }
    if (int = 4) {message.channel.send("I'm right here you know.")    }
    if (int = 5) {message.channel.send("It's like I'm not even here or something.")    }
    if (int = 6) {message.channel.send("I'd like to see how YOU feel if someone were talking about you behind your backdoor.")    }
    if (int = 7) {message.channel.send("Hello, is someone there? All I see is the void.")}
    if (int = 8) {message.channel.send("*yawns*")}
    if (int = 9) {message.channel.send("blanc")}
    if (int = 10) {message.channel.send("blanc")}
    message.channel.send("your rng hates you.")
  }
})

client.on('ready', () => {
  console.log('Autoresponders responding.')
})

client.login("NzAzMjkwMzYzNDYwMTkwMjk5.XxEvPg.YMIC_78FjlbTizrI6Q-fm7UIYYs");