const Discord = require("discord.js");
const Report = require("../models/report.js");
const botconfig = require("../botconfig.json");
const mongoose = require("mongoose");
const errors = require("../utils/errors.js");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;


module.exports.run = async (bot, message, args) => {
    await message.delete();
    if (message.author.id != `327545585328455682`) return;
    mongoose.connect(`mongodb+srv://Arklife:25122003@cluster0-orlez.mongodb.net/report`);
    let rUser = message.mentions.members.first();
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.slice(1).join(" ");
    if(!rreason) return errors.noReason(message.channel);

//let reportEmbed = new Discord.RichEmbed()
  //  .setDescription("Reports")
    //.setColor(orange)
    //.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    //.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    //.addField("Channel", message.channel)
    //.addField("Time", message.createdAt)
    //.addField("Reason", rreason);

  //let reportschannel = message.guild.channels.find(c => c.name == "reports");
    //if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    //reportschannel.send(reportEmbed);


  const report = new Report({
    _id: mongoose.Types.ObjectId(),
    username: rUser.user.username,
    userID: rUser.id,
    reason: rreason,
    rUsername: message.author.username,
    rID: message.author.id,
    time: message.createdAt
  });

  report.save()
  .then(result => console.log(result))
  .catch(err => console.log(err));

  message.reply("that report has been saved to the database!")






}

module.exports.help = {
  name: "report"
}