if(process.env.NODE_ENV === 'development') require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');

const config = require('./config.json');
const client = new Discord.Client({
  ws: { intents: config.intents }
});

// Commands
client.commands = new Discord.Collection();

const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(`Loading ${cmdFiles.length} commands.`);
for (const file of cmdFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Events
const evtFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
console.log(`Loading ${evtFiles.length} events.`);
for (const file of evtFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.login(process.env.TOKEN);