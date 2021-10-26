// const { Discord , Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const Client = require("./structures/Client");
// const client  = new Client({ intents: 32767 });
const Discord = require('discord.js');
const Command = require("./structures/Command.js");
const client = new Client();
const fs = require("fs");
require("./Events/welcome")(client);

fs.readdirSync("./Commands")
.filter(file => file.endsWith(".js"))
.forEach(file => {
    /**
     * @type {Command}
     */
    const command = require(`./Commands/${file}`);
    console.log(`Command ${command.name} (LOADED ✅)`)
    client.commands.set(command.name, command);
});

client.on("ready", () => {
    console.log("Bot is online ✔");
    client.user.setActivity("Lex Maverick's Server", {type: "WATCHING"});
});

client.on(("messageCreate"), message => {
   // console.log("[command] =>  " + (message.content) )

    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.substring(config.prefix.length).split(/  +/);

    const command =  client.commands.find(cmd => cmd.name == args[0]);

    const embed = new Discord.MessageEmbed();
    embed.setTitle("WARNING");
    embed.setDescription(`**${args[0]}** is not a valid command ❌`);
    embed.setColor("RED");

    if(!command) return message.channel.send({embeds: [embed]})

     command.run(message,args,client);
    

    // switch (args) {
         
    //     case "hello":
    //         message.reply("Hello, I am bot");

    //         break;
        
            
    // }
});

client.login(config.Token);