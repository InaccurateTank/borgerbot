const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
	name: 'borgerbot',
	description: 'Bot Information Command',
	execute(msg) {
    const embed = new Discord.MessageEmbed()
      .setColor('#530072')
      .setTitle("Hello I'm Borgerbot")
      .setURL('https://github.com/InaccurateTank/borgerbot')
      .setDescription('A poorly assembled custom chatbot')
      .addFields(
        { name: 'Author:', value: 'InaccurateTank (Tank#1623)' },
        { name: 'Version', value: config.version, inline: true },
        { name: 'Major Patchnotes', value: config.patchnote, inline: true },
        { name: 'Author Thought', value: config.thought},
      )
      .setTimestamp()
      .setFooter('Made with incompetence');
		msg.channel.send(embed);
	}
};