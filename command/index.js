import {SlashCommandBuilder} from '@discordjs/builders';
import {REST} from '@discordjs/rest';
import {Routes} from "discord-api-types/v9";
import secrets from '../config.json';

const commands = [
	new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Father, give me a joke.'),
	new SlashCommandBuilder()
		.setName('google')
		.setDescription('Search something, get a link.')
		.addStringOption(option => option.setName('query').setDescription('Search to perform.')),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(secrets.token);

rest.put(Routes.applicationGuildCommands(secrets.clientId, secrets.guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
