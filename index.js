// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import { randomJoke } from './api/joke/index.js';
import secrets from './config.json';
import "./command/index.js";

// Create a new client instance
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

  const {commandName} = interaction;
  switch (commandName) {
    case "joke":
      let joke = await randomJoke();
      if (joke.status === 200) {
        await interaction.reply(joke.joke);
      } else {
        await interaction.reply("Alas my son, I'm not feeling funny right now.")
      }
      break;
    case "google":
      if (interaction.options.data.length === 0) {
        await interaction.reply("You need to type something after /google, like /google rust vs go.")
        break;
      }
      let str_split = interaction.options.data[0].value.split(" ");
      await interaction.reply(`https://www.google.com/search?q=${str_split.join("+")}`)
      break;
  }
})

// Login to Discord with your client's token
client.login(secrets.token);
