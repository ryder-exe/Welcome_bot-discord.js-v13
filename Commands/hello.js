const Command = require("../structures/Command");

module.exports = new Command({
    name: "hello",
    description: "say hello to user",

    async run(message, args, client){
        message.reply(`hello ${message.author}`)
    }
})