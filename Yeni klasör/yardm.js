const Discord = require("discord.js");
const client=new Discord.Client();
const ayarlar=require('../ayarlar.json')
exports.run = async (client,message,args) => { 
  const embed = new Discord.MessageEmbed()
  .setTitle("Taha Bot Yardım Menüsü")
.setDescription(`**Kayıt** \n ${ayarlar.prefix}kayıtet = Biri Sizi Kayıt Eder. \n ${ayarlar.prefix}kayıt = Kayıt olursunuz. \n **Eğlence** \n ${ayarlar.prefix}yazı <yazınız>=yazıyı (-)şekilde yazar \n **Bilgi** \n ${ayarlar.prefix}kullanıcı-bilgi = bilginizi gösterir \n ${ayarlar.prefix}gecikme = Botun Ping Değerini Gösterir  `)
  .setColor("RANDOM")
  .setFooter('tarafından istendi ' + message.author.tag, message.author.avatarURL())
  .setTimestamp()
  message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y','help'],
  permLevel : 0
}

exports.help = {
  name : "yardım"
}