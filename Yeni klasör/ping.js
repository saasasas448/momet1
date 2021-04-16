const Discord = require('discord.js');
const data = require('quick.db')
const client=new Discord.Client();
exports.run = async (client, message, args) => {
const prefix =('t-')
  
let ölçüm = await message.channel.send(`Lütfen Bekleyin.`).then(a => {
setTimeout(async () => {
a.edit(`Lütfen Bekleyin..`)
setTimeout(async () => {
a.edit(`Lütfen Bekleyin...`)
setTimeout(async () => {
a.edit(`Bot pingi: ${client.ws.ping}`)
}, 1500)  
}, 1500)  
}, 1500)  

})

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ping'
};