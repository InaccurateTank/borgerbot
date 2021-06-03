if(process.env.NODE_ENV === 'development') require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
  if(!msg.author.bot) {
    if(msg.content.match(/\b(b[ou]rger)\b/ig)) {
      let t = new Date().toLocaleString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" });
      msg.channel.send(`It is ${t} in Borger Texas.`);
    }
  }
})

client.login(process.env.TOKEN);