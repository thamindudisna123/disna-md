//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['94768084855'] //ur owner number
global.ownername = "✮  🎀  𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  ✮" //ur owner name
global.ytname = "YT: SL Creative Tech" //ur yt chanel name
global.location = "Sri lanka" //ur location

//bot bomdy 
global.owner = ['94768084855']
global.ownertag = '94768084855' //ur tag number
global.botname = '✮  🎀  𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  ✮Bot MD V4' //ur bot name
global.linkz = "https://www.youtube.com/channel/UCV9YD7Jt3M-wak61MPqWogw" //your theme url which will be displayed on whatsapp
global.websitex = "https://www.youtube.com/channel/UCV9YD7Jt3M-wak61MPqWogw" //ur website to be displayed
global.reactmoji = "🤞" //ur menu react emoji
global.themeemoji = "🦄" //ur theme emoji
global.packname = " 🍰  🎀  𝒢𝑒𝓃𝒶𝓇𝑒𝓉𝑒𝒹 𝒷𝓎-𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  🍰 " //ur sticker watermark packname
global.author = " 🍰  🎀  𝒢𝑒𝓃𝒶𝓇𝑒𝓉𝑒𝒹 𝒷𝓎-𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  🍰" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['94768084855'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'හරී ✓',
    admin: 'Admin ට විතරයි ඔය command එක',
    botAdmin: 'Bot Admin ට ඕක තියෙන්නෙ!',
    owner: 'BOT Owner ට විතරයි!',
    group: 'group වල විතරයි ඔය command එක දෙන්න පුලුවන් මේ group එකට add වෙන්න https://chat.whatsapp.com/LcLK8NZgeJ9GJfGITIKCvG',
    private: 'මේක owner ට දාන මැසේජ් වලට විතරයි',
    bot: 'මේක bot ට විතරයි',
    wait: 'පොඩ්ඩක් ඉන්න...',
    linkm: 'Where is the link?',
    error: 'පොඩි අවුලක් ආය දාන්න බලන්න!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
