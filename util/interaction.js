import { randomJoke } from "../api/joke";

export async function parseInteraction(interaction) {
  const {commandName} = interaction;
  switch (commandName) {
    case "joke":
      let joke = await randomJoke();
      if (joke.status === 200) {
        return joke.joke;
      } else {
        return "Alas my son, I'm not feeling funny right now."
      }
    case "google":
      if (interaction.options.data.length === 0) {
        return "You need to type something after /google, like /google rust vs go.";
      }
      let str_split = interaction.options.data[0].value.split(" ");
      return`https://www.google.com/search?q=${str_split.join("+")}`;
  }
}