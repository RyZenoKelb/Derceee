const Discord = require("discord.js");
const Client = new Discord.Client;
const { MessageEmbed } = require("discord.js");
const { create } = require("domain");
const prefix = "+";
const ms = require("ms");
const { send } = require("process");
const { readdirSync } = require('fs');
const fs = require("fs")
const color = require('chalk')
const sql = require("sqlite");
sql.open("./scores.sqlite");


Client.on('ready', async() => {
    Client.user.setActivity('🛡️+help | 8 servers' , { type: 'STREAMING', url: 'https://twitch.tv/ryzeno/'})
})
Client.login("ODA0NzI5MjcxMjQ2OTEzNTk2.YBQkiQ.6NBg16MkjWfhsWOOq9bgwYVeDZE");


const loadCommands = (dir = "./cmds") => {
  readdirSync(dir).forEach(dirs => {
      const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

      for (const file of commands) {
          const filesName = require(`${dir}/${dirs}/${file}`);
          const files = file.split(".")[0];
          bot.commands.set(files, filesName)
          console.log("[" + color.blueBright `⭐` + `] : Commande chargé : ${files}`);
      };
  });
};
loadCommands();

Client.on("ready", () => {
  console.log("je suis pret le s"); 
  });

  Client.on("message", (message) => {
    // Exit and stop if it's not there
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "ping")) {
      const timeTaken = Date.now() - message.createdTimestamp;
      message.reply(`**Pong!** (${timeTaken}ms.)`);
    }
    if (message.content.startsWith(prefix + "foo")) {
      message.channel.send("**bar!**");
    }
      if (message.content.startsWith(prefix + "fdp")) {
        message.channel.send("~~mais vsy bz ta mere de la toi tdc~~");
    }
  });
//kick.js
Client.on("message", (message) => {
  if (message.content.startsWith("+kick")) {
    const member = message.mentions.members.first()
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande.<:discordPoop:810844935343439878> **')
    if (!member) {
      return message.reply(
        `**Veuillez mentionnez la personne a expulser.<:discordPoop:810844935343439878> **`
      )
    }
    if (!member.kickable) {
      return message.reply(`**Vous n'avez pas la permission de faire sa !<:discordPoop:810844935343439878> **`)
    }
    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} *A été expulser.*`))
      .catch((error) => message.reply(`**Désoler, une erreur s'est produite.<:discordPoop:810844935343439878> **`))
  }
})
//prefix.js
const COMMAND_PREFIX = "+";

Client.on('message', message => {

    if (message.author.bot) {
        return;
    }

    const lowerContent = message.content.toLowerCase();

    if (!lowerContent.startsWith(COMMAND_PREFIX)) {
        return;
    }

});
//ban.js
Client.on("message", (message) => {
  if (message.content.startsWith("+ban")) {
    const member = message.mentions.members.first()
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande. <:discordPoop:810844935343439878>**')
    if (!member) {
      return message.reply(
        `**Veuillez mentionnez la personne a bannir. <:discordPoop:810844935343439878>**`
      )
    }
    if (!member.bannable) {
      return message.reply(`**Vous n'avez pas la permission d'utiliser cette commande ! <:discordPoop:810844935343439878>**`)
    }
    return member
      .ban()
      .then(() => message.reply(`${member.user.tag} **A été banni.** <:Banhammer:810845027499900958>`))
      .catch((error) => message.reply(`**Désoler, une erreur s'est produite. <:discordPoop:810844935343439878>**`))
    }
  })

//help.js
Client.on("message", message => {
    if (message.content.startsWith(prefix + "help"))

 var embed = new Discord.MessageEmbed()
   .setColor("RANDOM") 
   .setTitle("**Voici la liste total des commandes** <a:aninho:810844495256092702>")
   .setAuthor("Derce", "https://cdn.discordapp.com/attachments/804732675302621266/811518422734077982/derce.png")
   .addField("<a:4745_thisr:811277652228571166> ``Ping``, ``Foo``, ``fdp``, ``say``, ``nombre``, ``gay``", "***Commandes de fun.***")
   .addField("<a:4745_thisr:811277652228571166> ``Kick``, ``Ban``, ``Clear``, ``raidmode``, ``mute``", "***Commandes de modération.***")
   .addField("<a:4745_thisr:811277652228571166> ``invite``, ``help``, ``userinfo``, ``roleinfo``, ``serverinfo``, ``ticket``, ``support``, ``avatar``", "***Commandes d'utilitaires.***")
   .setDescription("<a:aaadiamant:810844609021870100> [Inviter Derce dans votre serveur !](https://discord.com/api/oauth2/authorize?client_id=804729271246913596&permissions=8&scope=bot)")
   .setThumbnail("https://cdn.discordapp.com/attachments/804732675302621266/811519225054756874/derce.png")
   .setTimestamp()
   .setFooter("Crée et Développé par RyZeno#9999", "https://cdn.discordapp.com/attachments/804732675302621266/811518422734077982/derce.png")

   message.channel.send(embed);
});
//invite.js
Client.on("message", message => {
  if (message.content.startsWith(prefix + "invite"))

var embed = new Discord.MessageEmbed()
 .setColor("RANDOM") 
 .setTitle("**Invitez moi dans votre serveur !**")
 .setDescription("<a:4745_thisr:811277652228571166>[Cliquer ici !](https://discord.com/api/oauth2/authorize?client_id=804729271246913596&permissions=8&scope=bot)")
 .setAuthor("Derce", "https://cdn.discordapp.com/attachments/804732675302621266/811518422734077982/derce.png")
 .setThumbnail("https://cdn.discordapp.com/attachments/804732675302621266/811518422734077982/derce.png")
 .setTimestamp()
 .setFooter("Crée et Développé par RyZeno#9999", "https://cdn.discordapp.com/attachments/804732675302621266/811518422734077982/derce.png")

 message.channel.send(embed);
});
//clear.js
Client.on("message", (message) => {
    if(message.content.startsWith("+clear")){
      message.delete();
      if(message.member.hasPermission('MANAGE_MESSAGES')){
        

          let args = message.content.trim().split(/ +/g);

          if(args[1]){
            if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){

             message.channel.bulkDelete(args[1])
             return message.reply(`**Vous avez supprimé ${args[1]} message(s)**`)

            }
            else{
              return message.reply(`**Veuillez indiquez une valeur entre 1 et 99.**`)
            }
            
          }
          else{
            return message.reply(`**Vous devez indiquer un nombre de messages a supprimer.**`)
          }
      }
      else{
        return message.reply(`**Vous devez avoir la permission de gérer les messages pour éxécuter cette commande.**`)


         
        
            
        
      }
    }  
})

//userinfo.js
 moment = require('moment')

Client.on("message", (message) => {
  if(message.content.startsWith("+userinfo")){
    const member = message.mentions.members.first() || message.member
    message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField('Membre', member, true)
        .addField('Tag', member.user.tag, true)
        .addField('Date de création du compte', moment(member.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
        .addField('Date d\'arrivée sur le serveur', moment(member.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
        .addField('Date de début de boost', member.premiumSince ? moment(member.premiumSince).format('[Le] DD/MM/YYYY [à] HH:mm:ss') : 'Ne boost pas', true)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
        .setFooter(`ID : ${member.id}`, "https://cdn.discordapp.com/attachments/810815339252285440/810816641746206750/image-removebg-preview_4.png"))

  }
})
//roleinfo.js
 moment = require('moment')

Client.on("message", (message) => {
  if(message.content.startsWith("+roleinfo")){
    const role = message.mentions.roles.first()
    if (!role) return message.channel.send('**Veuillez mentionner le rôle dont vous voulez voir les infos.**')
    message.channel.send(new Discord.MessageEmbed()
        .addField('Rôle', role, true)
        .addField('Membres le possédant', role.members.size, true)
        .addField('Couleur', role.hexColor, true)
        .addField('Date de création', moment(role.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
        .addField('Affiché séparément', role.hoist ? 'Oui' : 'Non', true)
        .addField('Mentionnable', role.mentionable ? 'Oui' : 'Non', true)
        .setTimestamp()
        .setFooter(`ID : ${role.id}`)
        .setColor(role.hexColor))
  }
})
//serverinfo.js
 moment = require('moment')

Client.on("message", (message) => {
  if(message.content.startsWith("+serverinfo")){
    message.channel.send(new Discord.MessageEmbed()
    .addField('Nom', message.guild.name, true)
    .addField('Région', message.guild.region, true)
    .addField('Membres', `${message.guild.memberCount} membres\n${message.guild.members.cache.filter(member => !member.user.bot).size} humains\n${message.guild.members.cache.filter(member => member.user.bot).size} bots`, true)
    .addField('Salons', `${message.guild.channels.cache.size} salons\n${message.guild.channels.cache.filter(channel => channel.type === 'text').size} salons textuels\n${message.guild.channels.cache.filter(channel => channel.type === 'voice').size} salons vocaux\n${message.guild.channels.cache.filter(channel => channel.type === 'category').size} catégories`, true)
    .addField('Emojis', `${message.guild.emojis.cache.size} emojis\n${message.guild.emojis.cache.filter(emoji => !emoji.animated).size} emojis statiques\n${message.guild.emojis.cache.filter(emoji => emoji.animated).size} emojis animés`, true)
    .addField('Rôles', message.guild.roles.cache.size, true)
    .addField('Propriétaire', message.guild.owner, true)
    .addField('Date de création', moment(message.guild.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
    .addField('Nitro boost', `Tier : ${message.guild.premiumTier}\nNombre de boosts : ${message.guild.premiumSubscriptionCount}`, true)
    .setTimestamp()
    .setFooter(`ID : ${message.guild.id}`)
    .setThumbnail(message.guild.iconURL())
    .setImage(message.guild.bannerURL()))
  }
})
//raidmode.js
var raidmode = false;
Client.on("message", async message => {
   if(message.content.startsWith(prefix + "raidmode") || message.content.startsWith(prefix + "RaidMode")){
if(!message.member.hasPermission("MANAGE_MESSAGES"))return message.reply("**Vous n'avez pas la permission requise pour utiliser cette commande**") // perm de gérer les messages requis, à adapter 
if(raidmode === false){
        raidmode = true
await message.channel.send("**RaidMode activé <a:aaadiamant:810844609021870100> **")
      }else if(raidmode === true){
    raidmode = false
await message.channel.send("**RaidMode désactivé <a:aaadiamant:810844609021870100> **")
      }
   }
})

Client.on("guildMemberAdd", async member => {
if(raidmode === true){
await member.send("**RaidMode du serveur activé, veuillez réessayer plus tars**")
await member.kick("**RaidMode activé !**")
   }
})
//ticket.js
Client.on('message', msg => {
  if (msg.content == prefix + 'ticket') {
     var author = msg.author.username;
     var authorDis = msg.author.discriminator;
     var server = msg.guild;
     var channel = msg.channel;
     var channelId = msg.channel.id;
     server.channels.create( author +'#'+ authorDis, {
       type: 'text',
       permissionOverwrites: [
         {
           id: msg.guild.id,
           deny: ['VIEW_CHANNEL'],
         },
         {
           id: msg.author.id,
           allow: ['VIEW_CHANNEL'],
           allow: ['SEND_MESSAGES']
         },
       ],
     }).then(ch => { msg.reply('**Vous avez créé un ticket, le support vous contactera via le canal créé.**'); });
     console.log('TICKET CREATED');
     msg.delete();
   }
 else if (msg.content == prefix + 'close' || msg.content == prefix + 'ticketdel') {
   var author = msg.author.username;
   var authorDis = msg.author.discriminator;
   var server = msg.guild;
   var channel = msg.channel;
 
   if (channel.parent == null) {
     channel.send('**Fermeture dans 3 secondes...**');
     setTimeout(function() {
       channel.delete('**Ticket férmée**');
       console.log('TICKET CLOSED')
     }, 3000);
     msg.delete();
   }
 
   console.log('TICKET FERMER : ' + channel.name + ' by ' + author + '#' + authorDis);
 
 }
 
 });
//say.js
Client.on('message', async message => {
  if (message.content.startsWith("+say")) {
    message.delete();
    let msg = message.content.slice(4)
    if(!msg) return message.reply("**Veuillez entrer un message.**<:discordPoop:810844935343439878>")

    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(msg)
    message.channel.send(embed)
  }
})
//bienvenue.js
Client.on("guildMemberAdd", async member => {
  let bienvenue = Client.guilds.cache.get("804732674844655677").channels.cache.get("811896525826424842")
  .roles.cache.get("811289142394224680")

  bienvenue.send(`<a:4745_thisr:811277652228571166>***___Bienvenue dans le serveur ${member}, N'hésite pas a faire +help pour voir la totalité des comandes !___***`)

  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Bienvenue dans le serveur ! passe du bon temps <a:aninho:810844495256092702>", member)
  bienvenue.send(embed)
})
//.js
Client.on('message', message => {
if (message.content.startsWith("+nombre")) {
  message.channel.send(Math.floor((Math.random() * 500) + 1));
};
})

//support.js
Client.on("message", message => {
  if (message.content.startsWith(prefix + "support")) 

  // wesh bg bien ou quoi ? //

var embed = new Discord.MessageEmbed()
 .setColor("RANDOM") 
 .setTitle("**Besoin d'aide ? rejoignez le serveur de support !**")
 .setDescription("<a:4745_thisr:811277652228571166>[Cliquer ici !](https://discord.gg/Gt84t3EmBz)")
 .setAuthor("Derce", "https://cdn.discordapp.com/attachments/804732675302621266/811518422734077982/derce.png")
 .setThumbnail("https://cdn.discordapp.com/attachments/804732675302621266/811518422734077982/derce.png")
 .setTimestamp()
 .setFooter("Crée et Développé par RyZeno#9999", "https://cdn.discordapp.com/attachments/804732675302621266/811518422734077982/derce.png")

 message.channel.send(embed);
});
//.js
Client.on('guildMemberAdd', member => {
  member.guild.channels.cache.get("811896525826424842").send(`${member}`, new Discord.MessageEmbed()
      .setDescription(`***___${member}___ a rejoint le serveur. Nous sommes désormais ${member.guild.memberCount} !*** <a:aaadiamant:810844609021870100>`)
      .setColor('RANDOM'))
  member.roles.add("811289142394224680")
})
//.js
Client.on('message', (message,User) => {
  if (message.content.startsWith("+gay")) {
    message.delete();
    let gayrate = Math.floor(Math.random() * 101)


    if (!User) {
        let gayrateEmbed = new Discord.MessageEmbed()
            .setTitle("Est-tu Gay ?")
            .setColor("RANDOM")
            .setDescription(`${message.author} est gay a \`${gayrate}%\` <:tpd:796086751457574943>`)
            .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))
        message.channel.send(gayrateEmbed).catch(e => {
            console.log(e)
        })
    } else {
        let argsEmbed = new Discord.MessageEmbed()
            .setTitle("Calcul Gay")
            .setColor("RANDOM")
            .setDescription(`${User.user.username} est \`${gayrate}%\` gay 🏳️‍🌈`)
            .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))

        message.channel.send(argsEmbed).catch(e => {
            console.log(e)
        })
    }
  }
})
//.js
Client.on('message', (message,args) => {
  if (message.content.startsWith("+avatar")) {
    let user = message.mentions.users.first() || Client.users.cache.get(args[0]) || message.author;
    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
    let embed = new Discord.MessageEmbed()
        .setColor(`#4cd8b2`)
        .setDescription(`Avatar de ${user}`)
        .setImage(avatar)
        .setTimestamp();
     message.channel.send(embed);
  }
})
//.js
Client.on('message', (message) => {
  if (message.content.startsWith("+dance")) {


    var list = [
        'https://cdn.zerotwo.dev/DANCE/62ce61da-ed7c-4a85-b05c-bdea0ec30b29.gif',
        'https://cdn.zerotwo.dev/DANCE/d2178bd6-e3ff-44cf-94e7-a1d98b5f1d47.gif',
        'https://cdn.zerotwo.dev/DANCE/0a95dde7-7cd3-4624-a871-9b4d56bdede4.gif',
        'https://media.giphy.com/media/mJIa7rg9VPEhzU1dyQ/giphy.gif',
        'https://media1.tenor.com/images/c925511d32350cc04411756d623ebad6/tenor.gif?itemid=13462237',
        'https://media.giphy.com/media/3ohzdTADgmPfS1teWk/giphy.gif',
        'https://media.giphy.com/media/4hd57A5UcVqGQ/giphy.gif',
        'https://media.giphy.com/media/GYddQzjZC0kvK/giphy.gif',
        'https://media.giphy.com/media/YaTE7QSUtc4co/giphy.gif',
        'https://media.giphy.com/media/J3PFjRm7LB28w/giphy.gif'

    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    let avatar = message.author.displayAvatarURL({ format: 'png' });
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`${message.author} **dance** !`)
        .setImage(rand)
        .setTimestamp()
        .setAuthor(message.author.tag, avatar);
     message.channel.send(embed);
  }
})
//.js
Client.on('message', (message, args) => {
  if (message.content.startsWith("+mute")) {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
          "**Désolé, mais vous n'êtes pas autorisé à mute qui que ce soit**"
      );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("**Je n'ai pas l'autorisation de gérer les rôles.**");
  }

  const user = message.mentions.members.first();

  if (!user) {
      return message.channel.send("**Veuillez mentionner le membre à mute**")
  }

  if (user.id === message.author.id) {
      return message.channel.send("**Je ne te muterai pas** :(");
  }


  let muterole = message.guild.roles.cache.find(x => x.name === "Muet")
  if (!muterole) {
      return message.channel.send("**Ce serveur n'a pas de rôle avec le nom «Muet»**")
  }

  if (user.roles.cache.has(muterole)) {
      return message.channel.send("**L'utilisateur donné est déjà muet**")
  }

  user.roles.add(muterole)
  let embed = new Discord.MessageEmbed()
      .setTitle("<:muteD:811914258031837205> **Mute**")
      .setDescription(`**L'utilisateur ${message.mentions.users.first().username} a bien été mute**`)
      .setColor("RANDOM")
      .setFooter(`par ${message.author.username}`);

   message.channel.send(embed)
  let embedmp = new Discord.MessageEmbed()
      .setTitle('<:muteD:811914258031837205>**Sanction**')
      .setDescription(`**Vous avez été muet de ${message.guild.name} **`)
      .addField(`**Raison :`, ` Enfrain les règles**`)
      .setFooter(`**Sanction par ${message.author.username}**`);
  user.send(embedmp)

  console.log(`|----> mute utilisé sur le serveur :  ${message.guild.name} `)
  }
})
//TICKETTTTTTTTTTTTTTTTTTTTTT.js
