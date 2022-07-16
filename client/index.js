// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import { parseInteraction } from '../util/interaction';
import secrets from '../config.json';

export function initClient () { 
  const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

  // When the client is ready, run this code (only once)
  client.once('ready', () => {
    console.log('Bot Ready.');
  });
  
  client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.content.toLowerCase() == ("daddy chill") || message.content.toLowerCase() == "chill") {
      await message.channel.send({files: ["./images/chill.jpg"]})
    }
  });
  
  client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) return;
    let message = await parseInteraction(interaction);
    if (message) {
      await interaction.reply(message);
    }
  })
  client.login(secrets.token);
}