const { MessageEmbed } = require("discord.js");
const Command = require("../structures/Command");

module.exports = new Command ({
    name: "info",
    description: "Show the information about bot.",
    
    async run(message, args, client){

        const info_embed = new MessageEmbed();
        info_embed.setTitle("BOT INFORMATION");
        info_embed.setDescription("[Showing all the information related with bot.](https://discord.gg/gg)");
        info_embed.setColor("#6ABB34");
        info_embed.addFields(
            {name: "Bot Name :", value: "LexAnne 2.0 ", inline: true},
            {name: "Owner:", value: "<@790453571933569055>", inline: true},
            {name: "Developer:", value: "<@729492131936337963>", inline: true},
            {name: "Status:", value: "Online 🟢", inline: true},
            {name: "Current Version:", value: "djs v13", inline: true},
            {name: "Node Version:", value: "16.6.1", inline: true}
            
        )
        info_embed.setThumbnail('https://cdn.discordapp.com/attachments/869901546287149066/875116673655513149/wave_pre..png');
        info_embed.setFooter("Command Requested By:" + message.author.username, "https://cdn.discordapp.com/attachments/869901546287149066/875116673655513149/wave_pre..png");

        message.channel.send({embeds: [info_embed]});

    }
})