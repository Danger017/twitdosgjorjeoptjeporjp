const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['455331653309562910'];


client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('17w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("idle")
    message.channel.send(` ** ${argresult} \ ** `)
} else 
if (message.content.startsWith('17l')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(` ** ${argresult} \ ** `)
  });
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '17a') {
  let channel = client.channels.get('513697923876257792');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);
