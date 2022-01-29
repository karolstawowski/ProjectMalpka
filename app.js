const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

fs.readFile("password.txt", function (err, data) {
  if (err) {
    throw err;
  }
  const token = data.toString();

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on("message", (msg) => {
    if (msg.mentions.has(client.user)) {
      const description =
        "!sing - singing_skul.mp4\n" +
        "!skul - skul.jpg\n" +
        "!happyskul - happy_skul.png\n" +
        "!kreciolek - kreciolek.gif\n" +
        "skul. - loop of skuls\n" +
        "karol top - gra, w którą Karol dziś nie zagra\n" +
        "karol top sql - gra, w którą Karol dziś nie zagra - SQL Edition";

      const embed = new Discord.MessageEmbed()
        .setTitle("Pomoc dla Serwerowego Pomocnika")
        .setColor(0x0900ab)
        .setDescription(description);

      msg.channel.send(embed);
    }
    if (msg.content.toLowerCase() === "!sing") {
      const attachment = new Discord.MessageAttachment(
        "./assets/singing_skul.mp4"
      );
      msg.channel.send(attachment);
    }
    if (msg.content.toLowerCase() === "!skul") {
      const attachment = new Discord.MessageAttachment("./assets/fat_skul.jpg");
      msg.channel.send(attachment);
    }
    if (msg.content.toLowerCase() === "!happyskul") {
      const attachment = new Discord.MessageAttachment(
        "./assets/happy_skul.png"
      );
      msg.channel.send(attachment);
    }
    if (
      (msg.content.toLowerCase() === "!kreciolek") |
      (msg.content.toLowerCase() === "!kręciołek")
    ) {
      const attachment = new Discord.MessageAttachment("./assets/skul.gif");
      msg.channel.send(attachment);
    }
    if (msg.content.toLowerCase() === "skul.") {
      (async () => {
        const attachment = new Discord.MessageAttachment(
          "./assets/fat_skul.jpg"
        );
        for (var i = 0; i < 20; i++) {
          msg.channel.send(attachment);
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      })();
    }
    if (msg.content.toLowerCase() === "karol top") {
      const randomNumber = getRandomIntInclusive(0, 113038);

      fs.readFile(
        "./assets/api.steampowered.com.json",
        "utf8",
        function (err, data) {
          if (err) throw err;
          const obj = JSON.parse(data);
          const opis = obj.applist.apps[randomNumber].name;
          const embed = new Discord.MessageEmbed()
            .setTitle("Gra, w którą Karol nie zagra: ")
            .setColor(0x0900ab)
            .setDescription(opis);

          msg.channel.send(embed);
        }
      );
    }
    if (msg.content.toLowerCase() === "karol top sql") {
      const randomNumber = getRandomIntInclusive(0, 113038);

      var mysql = require("mysql");
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "steam_games",
      });

      con.connect(function (err) {
        if (err) throw err;
        con.query(
          "SELECT GameName FROM Games WHERE `ID` = " + randomNumber + ";",
          (err, results, fields) => {
            if (err) throw err;
            const embed = new Discord.MessageEmbed()
              .setTitle("Gra, w którą Karol nie zagra: ")
              .setColor(0x0900ab)
              .setDescription(results[0].GameName);
            msg.channel.send(embed);
          }
        );
      });
    }
  });
  client.login(token);
});
