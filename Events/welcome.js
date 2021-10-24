const Discord = require("discord.js");
const Canvas = require("canvas");
const config = require("../config.json");
module.exports = (client) =>{
    
    const channelID = '869902010143604756'
    
    client.on('guildMemberAdd', async member => {
        

        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage("./Events/welcome.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle ='#C0C0C0';
        ctx.strokeRect(0, 0, canvas.width-5, canvas.height-5);

         ctx.font = '50px Impact';
         ctx.fillstyle = '#C0C0C0'
         ctx.fillText(`${member.user.username}`, 362, 215)

        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2 , true);
        ctx.closePath();
        ctx.clip();
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: 'jpg'}))
        ctx.drawImage(avatar, 25, 25, 200, 200);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome2.png');

   

        const  welembed = new Discord.MessageEmbed()
        .setAuthor('LEX MAVERICK', `${member.guild.iconURL({dynamic: true })}`)
        .setColor(0x42AAE9)
        .setDescription(`hii `)
        .setImage("attachment://welcome2.png")
        .setFooter("WELCOME TO LEX MAVERICK'S SERVER", `${member.guild.iconURL({dynamic: true})}`)
        
        const channel = member.guild.channels.cache.get(channelID)
        channel.send({ embeds: [welembed], files: [attachment]})
        
        


    })
}