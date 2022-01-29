# ProjectMalpka
![Language](https://img.shields.io/badge/language-JavaScript-3993fa)
![License](https://img.shields.io/github/license/karolstawowski/ProjectMalpka?color=3993fa)
![Number of lines](https://img.shields.io/tokei/lines/github/karolstawowski/ProjectMalpka?color=3993fa)
![Version](https://img.shields.io/badge/version-1.0.0.0-3993fa) <br>

## Description
Project Malpka is a Discord Bot made using Node.js enviroment.
The most important function of the bot is selecting a random game from Steam, which I won't play.
Solution uses MySQL database instead of a simple JSON file (official Steam API) to reduce the load imposed on the bot.

## Installation

To run ProjectMalpka locally, you are to have both <a href="https://nodejs.org/en/download/">Node.js enviroment</a> and <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm package manager</a> installed. 

```bash
git clone https://github.com/karolstawowski/ProjectMalpka.git
```

<i>
Open Xampp, run Apache and MySQL servers<br>
Navigate to Xampp directory, insert ./assets/api.steampowered.com.csv file to ./mysql/data/malpkajs/<br>
Run script.sql
Create file password.txt in root directory of project with Discord Bot's token inside
</i>

```bash
npm install
```

```bash
node app.js
```

### Technologies and Tools
Node.js, <a href="https://discord.js.org/#/">discord.js</a>, MySQL, Steam API, Xampp

<i>I don't like playing computer games. It's immature.</i>
