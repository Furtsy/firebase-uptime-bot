const Discord = require('discord.js');
const urls = require('is-url');
require('dotenv/config');
const firebase = require('firebase/app');
const FieldValue = require('firebase-admin').firestore.FieldValue;
const admin = require('firebase-admin');
exports.run = function(client, message, args) {
let data = admin.firestore();
var link = args[1]
var users = message.mentions.users.first()
data.collection('links').doc(`uptime.${users.id}`).get().then((datas) => {
if(!datas.exists) return message.channel.send('no links registered in data')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('Questioned Person:', `${datas.data().author_username}`, true)
        .addField('Link:', `${datas.data().link}`, true)
        .addField('Document Id:', `uptime.${datas.data().author_id}`, true)
        .setTimestamp();
        message.channel.send(embed);
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["query"],
  permLevel: 0
};

exports.help = {
  name: 'query',
  description: 'queries from the persons data',
  usage: 'query'
};
