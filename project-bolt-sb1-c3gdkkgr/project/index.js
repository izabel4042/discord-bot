require('dotenv').config(); const http = require('http');
http.createServer((req, res) => { res.write('Bot is online!'); res.end(); }).listen(process.env.PORT || 10000);

const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, () => {
  console.log('Bot is online!');
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    await message.reply('Hello!');
  }
});

client.login(process.env.DISCORD_TOKEN);
