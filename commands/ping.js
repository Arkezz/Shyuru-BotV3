const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let pingembed = new Discord.RichEmbed()
    .setTitle("Ping!")
    .setDescription("Pong!")
    .setColor("RANDOM")
    .addField("Ping:",`${Date.now() - message.createdTimestamp}` + ' ms');
    return message.channel.send(pingembed)
    message.delete().catch(O_o=>{});
}
    
  

  module.exports.help = {
    name: "ping"
  }