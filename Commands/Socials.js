const Discord =  require("discord.js");
const Command = require("../structures/Command");

module.exports = new Command ({
    name : "socials",
    description: "This will show the help commands. ",

    async run (message, args, client) {

      const row = new Discord.MessageActionRow().addComponents(
          new Discord.MessageSelectMenu()
          .setCustomId("select")
          .setPlaceholder("select your option")
          .addOptions ([
              {
                  label: "INSTAGRAM",
                  description: "click here to see this social.",
                  value: "first",
                  emoji: "<:insta:902186845729873952>"
              },
              {
                label: "YOUTUBE",
                description: "click here to see this social.",
                value: "second",
                emoji: "<:YouTube_23392:902186844043747339>"
            },
            {
                label: "FACEBOOK",
                description: "click here to see this social.",
                value: "third",
                emoji: "<:facebook_icon_130940:902186844253462538>"
            },
            {
                label: "TWITTER",
                description: "click here to see this social.",
                value: "fourth",
                emoji: "<:twitter:902186844328955914>"
            },
            {
                label: "TWITCH",
                description: "click here to see this social.",
                value: "fiveth",
                emoji: "<:__:902186844324773909>"
            }
           
          ])
      )

      const row1 = new Discord.MessageActionRow().addComponents(
          new Discord.MessageButton()
          .setURL("https://fb.com")
          .setLabel("Click")
          .setStyle("LINK")

      );

      const row2 = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setURL("https://fb.com")
        .setLabel("Click")
        .setStyle("LINK")

    );

    const row3 = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setURL("https://fb.com")
        .setLabel("Click")
        .setStyle("LINK")

    );

    const row4 = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setURL("https://fb.com")
        .setLabel("Click")
        .setStyle("LINK")

    );

    const row5 = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setURL("https://fb.com")
        .setLabel("Click")
        .setStyle("LINK")

    );

      const embed = new Discord.MessageEmbed()
      .setTitle("Welcome to Help Menu")
      .setDescription("select the following help commands from the drop menu.")
      .setColor("BLUE")

      message.channel.send({embeds: [embed], ephemeral:true, components: [row]})


      const embed1 = new Discord.MessageEmbed()
      .setTitle("instagram")
      //.setDescription(".info => ```This will show you the information about Bot.```")   // => ``````
      .setColor("#ec9346")
      .setImage("https://cdn.discordapp.com/attachments/869901546287149066/902495385178738708/instagram.png")


      const embed2 = new Discord.MessageEmbed()
      .setTitle("youtube")
     // .setDescription(".ping => ```This will show the ping of the Bot.```")
      .setColor("#f00e0e")
      .setImage("https://cdn.discordapp.com/attachments/869901546287149066/902495396083941416/youtube.png")

      const embed3 = new Discord.MessageEmbed()
      .setTitle("facebook")
      //.setDescription(".join => ```This will show the join link of the Server.```")
      .setColor("#4951f7")
      .setImage("https://cdn.discordapp.com/attachments/869901546287149066/902495383173890058/facebook.png")

      const embed4 = new Discord.MessageEmbed()
      .setTitle("twitter")
     // .setDescription(".socials => ```This will show the socials of the Lex Maverick.```")
      .setColor("#49ccf7")
      .setImage("https://cdn.discordapp.com/attachments/869901546287149066/902495393542176798/twitter.png")

      const embed5 = new Discord.MessageEmbed()
      .setTitle("twitch")
     // .setDescription(".updatelog => ```This will show the update uptime of the Bot.```")
      .setColor("#8d49f7")
      .setImage("https://cdn.discordapp.com/attachments/869901546287149066/902495392212615179/twitch.png")

      
      .setImage("")


      const collector = message.channel.createMessageComponentCollector({
          componentType: "SELECT_MENU"
      })

      collector.on("collect", async (collected) => {
          const value = collected.values[0]

          if(value === "first"){
              collected.reply({embeds: [embed1], ephemeral:true, components: [row1]})
          }

          if(value === "second"){
            collected.reply({embeds: [embed2], ephemeral:true , components: [row2]})
        }

        if(value === "third"){
            collected.reply({embeds: [embed3], ephemeral:true , components: [row3]})
        }

        if(value === "fourth"){
            collected.reply({embeds: [embed4], ephemeral:true , components: [row4]})
        }

        if(value === "fiveth"){
            collected.reply({embeds: [embed5], ephemeral:true , components: [row5]})
        }

       
      })


    }


})
