const  Discord = require("discord.js");
const Command = require("../structures/Command.js");


module.exports =  new Command({
    name: "ping",
    description: "show the ping of bot",

    async run(message, args, client){

        //const msg = await message.reply(`Ping: ${client.ws.ping} ms`)
        // msg.edit(`Ping: ${client.ws.ping} ms. \n Message ping: ${msg.createdTimestamp - message.createdTimestamp} ms.`)

        const ping_embed = new Discord.MessageEmbed();
       // ping_embed.setAuthor('hii','https://imgur.com/aKMTmbY');
        ping_embed.setTitle("PONG 🏓");
        ping_embed.setDescription("show the ping of the bot.");
        ping_embed.setFields(
            {name: "BOT PING", value: `${client.ws.ping} ms`},
            //{name: "Message Ping", value: `${message.createdTimestamp - client.ws.ping } ms.`}
        )
        ping_embed.setColor('#6ABB34');
        ping_embed.setThumbnail('https://cdn.discordapp.com/attachments/869901546287149066/875116673655513149/wave_pre..png');
        ping_embed.setFooter(`Ping commands requested by : ` + message.author.username)
    
        

        message.channel.send({embeds: [ping_embed]});

       
        
        }

        
    
});


// ${message.guild.iconURL({dynamic: true })}