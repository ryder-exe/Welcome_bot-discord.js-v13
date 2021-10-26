const Discord = require("discord.js");
const Command = require("../structures/Command");

module.exports = new Command ({
    name: "invite",
    description: "Invite the bot in your server.",

    async run (message, args, client) {

        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setURL("https://cdn.discordapp.com/attachments/869901546287149066/875116673655513149/wave_pre..png")
            .setLabel("Click")
            .setStyle("LINK")
        );


        const embed = new Discord.MessageEmbed();
        embed.setTitle("Invite");
        embed.setDescription("[Click the button to redirect.](https://gg.g)");
        embed.setColor("#2f60ff");
        embed.setImage('https://media.discordapp.net/attachments/869901425562484736/901910184597807134/invite.png');
        
    message.channel.send({embeds: [embed], components: [row]});


    }
})