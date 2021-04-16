const Discord = require("discord.js")
exports.run = async(client,message,args) => {
  let kullanıcı = message.mentions.users.first()
  let kayıtlı = ("806458308084367393") 
  let gorevli = ("806857015300849696") 
  let kayıtsız = ("806458352841261067") 
  
  if(!message.member.roles.cache.has(gorevli)) return message.reply("Bu komutu sadece kayıt görevlisi kullanabilir.")
  if(!kullanıcı)return message.reply("Bir kullanıcıyı etiketle.")
  if(!args[1]) return message.channel.send(`${kullanıcı.tag} kullanıcısı için isim gir`)
  if(!args[2]) return message.channel.send(`${kullanıcı.tag} kullanıcısı için yaş gir`)
  if(isNaN(args[2])) return message.reply("Geçerli sayı gir")
  message.guild.member(kullanıcı).setNickname(`${args[1]} | ${args[2]}`)
  message.guild.member(kullanıcı).roles.add(kayıtlı)
   message.guild.member(kullanıcı).roles.remove(kayıtsız)
  message.channel.send(`${kullanıcı.tag} Kullanıcısı ${message.author.tag} Tarafından ${args[0]} olarak kayıt edildi.`)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel : 0
}

exports.help = {
  name : "kayıtet"
}