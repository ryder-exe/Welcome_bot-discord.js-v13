const { Discord, Client} = require("discord.js");
const client = require("./Client.js")
/**
 * @param {Discord.Message / Discord.Interaction} message
 * @param {strings[]} args
 * @param {Client} client
 */



class Command {

/**
 * @typedef {{name: string, description: string, run: RunFunction}} CommandOptions
 * @param {CommandOption} options 
 */

    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.run = options.run;
    }
}

module.exports = Command;