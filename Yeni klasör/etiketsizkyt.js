const Discord = require("discord.js")
exports.run = async(client,message,args) => {
  let kullanıcı = message.mentions.users.first()
  let kayıtlı = ("806458308084367393") 
  let kayıtsız = ("806458352841261067") 
  if(message.member.roles.cache.has(kayıtlı)) return message.reply("\<a:Zpla:806535961583943721>Zaten kayıt olmuşsun\<a:Zpla:806535961583943721>.")
  if(!message.member.roles.cache.has(kayıtsız)) return
  if(!args[0]) return message.channel.send(`${message.author.tag} İsmini gir`)
  if(!args[1]) return message.channel.send(`${message.author.tag} Yaşını gir`)
  if(isNaN(args[1])) return message.reply("Geçerli sayı gir")
  message.member.setNickname(`${args[0]} | ${args[1]}`)
  message.member.roles.add(kayıtlı)
   message.member.roles.remove(kayıtsız)
   message.channel.send(`${message.author.tag} Kullanıcısı ${message.author} olarak kayıt edildi.`)
   
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel : 0
}

exports.help = {
  name : "kayıt"
}