const Discord =  require("discord.js");
const Command = require("../structures/Command");

module.exports = new Command ({
    name : "help",
    description: "This will show the help commands. ",

    async run (message, args, client) {

      const row = new Discord.MessageActionRow().addComponents(
          new Discord.MessageSelectMenu()
          .setCustomId("select")
          .setPlaceholder("select your option")
          .addOptions ([
              {
                  label: "1️⃣ INFO",
                  description: "click here to see this command.",
                  value: "first"
              },
              {
                label: "2️⃣ PING",
                description: "click here to see this command.",
                value: "second"
            },
            {
                label: "3️⃣ JOIN",
                description: "click here to see this command.",
                value: "third"
            },
            {
                label: "4️⃣ SOCIALS",
                description: "click here to see this command.",
                value: "fourth"
            },
            {
                label: "5️⃣ UPDATELOGS",
                description: "click here to see this command.",
                value: "fiveth"
            },
            {
                label: "6️⃣ UPTIME",
                description: "click here to see this command.",
                value: "sixth"
            },
            {
                label: "7️⃣ ABOUTUSER",
                description: "click here to see this command.",
                value: "seventh"
            }
          ])
      )

      const embed = new Discord.MessageEmbed()
      .setTitle("Welcome to Help Menu")
      .setDescription("select the following help commands from the drop menu.")
      .setColor("BLUE")

      message.channel.send({embeds: [embed], ephemeral: true, components: [row]})


      const embed1 = new Discord.MessageEmbed()
      .setTitle("info")
      .setDescription(".info => ```This will show you the information about Bot.```")   // => ``````
      .setColor("BLUE")


      const embed2 = new Discord.MessageEmbed()
      .setTitle("ping")
      .setDescription(".ping => ```This will show the ping of the Bot.```")
      .setColor("BLUE")

      const embed3 = new Discord.MessageEmbed()
      .setTitle("join")
      .setDescription(".join => ```This will show the join link of the Server.```")
      .setColor("BLUE")

      const embed4 = new Discord.MessageEmbed()
      .setTitle("Socials")
      .setDescription(".socials => ```This will show the socials of the Lex Maverick.```")
      .setColor("BLUE")

      const embed5 = new Discord.MessageEmbed()
      .setTitle("updatelog")
      .setDescription(".updatelog => ```This will show the update uptime of the Bot.```")
      .setColor("BLUE")

      const embed6 = new Discord.MessageEmbed()
      .setTitle("uptime")
      .setDescription(".uptime => ```This will show the uptime stats of the Bot.```")
      .setColor("BLUE")

      const embed7 = new Discord.MessageEmbed()
      .setTitle("aboutuser")
      .setDescription(".aboutuser => ```This will show the about user of the person.```")
      .setColor("BLUE")



      const collector = message.channel.createMessageComponentCollector({
          componentType: "SELECT_MENU"
      })

      collector.on("collect", async (collected) => {
          const value = collected.values[0]

          if(value === "first"){
              collected.reply({embeds: [embed1], ephemeral:true})
          }

          if(value === "second"){
            collected.reply({embeds: [embed2], ephemeral:true})
        }

        if(value === "third"){
            collected.reply({embeds: [embed3], ephemeral:true})
        }

        if(value === "fourth"){
            collected.reply({embeds: [embed4], ephemeral:true})
        }

        if(value === "fiveth"){
            collected.reply({embeds: [embed5], ephemeral:true})
        }

        if(value === "sixth"){
            collected.reply({embeds: [embed6], ephemeral:true})
        }

        if(value === "seventh"){
            collected.reply({embeds: [embed7], ephemeral:true})
        }

      })


    }


})
