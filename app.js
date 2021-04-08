const Discord = require('discord.js');
const client = new Discord.Client();
//Połączenie z botem
const fs = require('fs');

fs.readFile('password.txt', function (err, data) {
    if (err) {
      throw err; 
    }
    const token = data.toString();

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
    //Funkcje bota
    client.on('message', msg => {
        if (msg.author.bot) return
        if(msg.content.toLowerCase() === '!malpka' | msg.content.toLowerCase() === '!małpka')
        {
            const opis = '!małpka - pomoc\n'+
            '!hepiskul - hepiskul.png\n'+
            '!grubyskul - grubyskul.png\n'+
            '!ogromnyskul - ogromnyskul.jpg\n'+
            '!kreciolek - kreciolek.gif\n'+
            'skul. - loop of skuls\n'
            const embed = new Discord.MessageEmbed()
            .setTitle('Pomoc dla Serwerowego Skulwysyna')
            // Set the color of the embed
            .setColor(0x0900AB)
            // Set the main content of the embed
            .setDescription(opis);
            // Send the embed to the same channel as the message
            msg.channel.send(embed);
        }
        if (msg.content.toLowerCase() === '!hepiskul') 
        {
            const attachment = new Discord.MessageAttachment('happyskul.png');
            msg.channel.send(attachment);
        }
        if (msg.content.toLowerCase() === '!grubyskul') 
        {
            const attachment = new Discord.MessageAttachment('gruby_skul.png');
            msg.channel.send(attachment);
        }
        if (msg.content.toLowerCase() === '!ogromnyskul') 
        {
            const attachment = new Discord.MessageAttachment('fat_skul.jpg');
            msg.channel.send(attachment);
        }
        if (msg.content.toLowerCase() === '!kreciolek' | msg.content.toLowerCase() === '!kręciołek') 
        {
            const attachment = new Discord.MessageAttachment('skul.gif');
            msg.channel.send(attachment);
        }
        if (msg.content.toLowerCase() === 'skul.') 
        {
            (async function doSomeStuff() {
                const attachment = new Discord.MessageAttachment('gruby_skul.png');
                for(var i=0;i<20;i++) {
                    msg.channel.send(attachment);
                    await new Promise(resolve => setTimeout(resolve, 5000));
                }
            })();
        }
        if (msg.content.toLowerCase() === 'karol top') 
        {
            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            
            const losowa = getRandomIntInclusive(0,20000);
            const data = require('./api.steampowered.com.json');

            fs.readFile('./api.steampowered.com.json', 'utf8', function (err, data) {
                if (err) throw err;
                const obj = JSON.parse(data);
                const opis = obj.applist.apps[losowa].name;
                const embed = new Discord.MessageEmbed()
                .setTitle('Gra, w którą Karol nie zagra: ')
                .setColor(0x0900AB)
                .setDescription(opis);
                
                msg.channel.send(embed);
            });
        }
    });
    client.login(token);
  });