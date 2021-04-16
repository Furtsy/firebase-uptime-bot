const Discord = require('discord.js');
const urls = require('is-url');
require('dotenv/config');
const firebase = require('firebase/app');
const FieldValue = require('firebase-admin').firestore.FieldValue;
const admin = require('firebase-admin');
exports.run = function(client, message, args) {
let data = admin.firestore();
  var link = args[1]
let url = urls(link) ? link : `https://${link}`;
if(!urls(url)) return message.reply('please enter link')

if(!urls(url)) return message.reply('please enter link')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Successfully saved to the cloud')
        .addField('Submitted by:', `<@${message.author.id}>`, true)
        .addField('Added Link:', `${link}`, true)
        .addField('Document Id:', `uptime.${message.author.id}`, true)
        .setTimestamp();
        message.channel.send(embed);
data.collection('links').doc(`uptime.${message.author.id}`).set({
'link': link,
'author_id': message.author.id,
'author_username': message.author.username
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["add"],
  permLevel: 0
};

exports.help = {
  name: 'add',
  description: 'Adds the link to be uptime to firebase',
  usage: 'add'
};
