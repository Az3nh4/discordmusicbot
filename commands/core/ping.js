const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        const start = Date.now();
        message.channel.send('Pong!').then(m => {
            const embed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle(client.user.username + " - Pong!")
                .setThumbnail(client.user.displayAvatarURL())
                .addField(`Latência da Mensagem`, `\`${Date.now() - start}ms\` 🛰️`)
                .addField(`Latência da Mensagem`, `\`${m.createdTimestamp - start}ms\` 🛰️`)
                .addField(`Latência da API`, `\`${Math.round(client.ws.ping)}ms\` 🛰️`)
                .setTimestamp()
                .setFooter({ text: 'Comandos do BOT || Az3nh4#0001 ❤️', iconURL: message.author.avatarURL({ dynamic: true }) });
            m.edit({ embeds: [embed] });
        })
    },
};
