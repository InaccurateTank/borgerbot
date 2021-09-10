const config = require('../config.json');

module.exports = {
  name: 'message',
  execute(msg, client) {
    if(msg.author.bot) return;

    // Message Regex
    if(msg.content.match(/\S*b[ou]rger\b/ig)) {
      const t = new Date().toLocaleString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" });
      msg.channel.send(`It is ${t} in Borger Texas.`);
      return;
    }

    // Command Handler
    if(!msg.content.startsWith(config.prefix)) return;
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(msg, args);
    } catch(error) {
      console.error(error);
      msg.reply('there was an error trying to execute that command!');
    }
  }
};

//     if(msg.content.match(//ig)) {
//       let rand = Math.floor((Math.random() * 2) + 1);
//       let img;
//       switch(rand) {
//         case 1:
//           img = 'a';
//           break;
//         case 2:
//           img = 'b';
//           break;
//       }
//       msg.reply(img);
//     }