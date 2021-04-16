const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let oyun = args.slice(0).join(' ');
    if (oyun.length < 1) return message.reply('Oynamak için herhangi bir oyun yazmalısın.');
    if ('bu kmutu kullanma yetkin yok'){return 0}
    if (message.member.hasPermission("ADMINISTRATOR"))return 0;
  message.delete();
  client.user.Activity(oyun);
  message.channel.send(`:white_check_mark: Oyun ***${oyun}*** olarak değiştirildi.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyaz'],
  permLevel: 4
};

exports.help = {
  name: 'oynuyoryaz',
  description: 'Botun oynadigi oyunu gösterir.',
  usage: 'oynuyoryaz <oyun ismi>'
};