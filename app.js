const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NTIxNDMwMTkwNjE5MDk5MTQ2.Du8oSw.MSlL6NTQ2sDqrnC0pekUUoyLCbA'

client.on('ready', () => {
  console.log(`Logat ca:     ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Inceapa distractia!');
  }
});

client.login(process.env.BOT_TOKEN);
