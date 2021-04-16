const Discord = require("discord.js");
const client=new Discord.Client();
exports.run = async (client,message,args) => { 
  const embed = new Discord.MessageEmbed()
  .setTitle('**Beni oylamak mı istiyorsun**')
  .setDescription(`Yukaru-ıdaki yazıya tıklayarak beni oylayabilirsin`)
  .setURL('https://top.gg/servers/806457781536030761/vote')
  .setColor("RED")
  .setFooter('tarafından istendi ' + message.author.tag, message.author.avatarURL())
  .setTimestamp()
  message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['oy'],
  permLevel: 0
}

exports.help = {
  name: 'oyver'
}