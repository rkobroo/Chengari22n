const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibott",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "RKO BRO",
  description: "Reply when someone write bot and autoreact",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Hi I am Robot made by RKO BRO", "Please don't disturb me", "Love uhh janeman ;*","Meri Jann Kya Hua","I Love uhh Always","Baby Kaho tO Kiss Kar Lu","Date pe chale", "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya? 🤬" ,  "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" ,  " RKO BRO Ake tera behen Ko Chura le Jayega" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "ani bhana bihe ko date timle nikalxau ki maile🙈","maya tmro condo😗","aalu khau babe 💋","Tmi bhayera satha rahyo mero saas ko bappy🙊🙈","thaamana yo haath maaka dox🥺👊🏻","Babe mero ma tmle k dekheu🙈","aakha banda garera i love bhan if you love me truly 😾","kati bot bot gareyko hola raam😱","sablai vandeu aba 'i am no more single😏","bhaag yA dekhi nata vaney dhunga le tauko foddinxu😾","mujhe kya mai toh bot hu🌚","laduu khane hau????","aja ma tmi saaf saf vndinxu ki i love you..yes i really love you🌞❤️","arule sath deos ya nadeos ma dinxu lo😘 khali kiss deu tmi","ncell ko tower ko height vnda ni dheraiii maya garxu 💋","agar tum miljao toh yahi patak k tumhari khopda fodd denge hum🦟🌚","myakuri kati bot vnxas ghr ma aru kam xaina?","you are the perfect example of naalayak,berojgaar🌚","talai mann parxa aalu ko tarkari.kina vaney ta hos berojgaari","kaam na payeko manusya🌚","huh bhn k vo?","babe ..i wanna kiss your lips can i?","i wanna create a football team with you and our sons😗","kati bot matra vnya RKO BRO sanga ni bola na ho","luh aba dherai bot bot vaniss aba haal samachar sod group member ko😒","ek choti vanya sundainas?","tumne bolaya aur hum chale aaye janemann😗😗","batein baat krte krte kab apko humse pyaar hogya pata hee nahi chala","babe raat ko hum night out pe chale parr bill tum dedicate karti ho🤭🤭","main boht kanjus huu ek chummi do fir baat krunga main😗","babe tmi sath deu ma ni afno haat dinxu tmi i love you vana mro vikk ko naam ma aam ko paat dinxu😘","maya ..paisa magda tmile malai xillar diyeu ..maile tmilai sacho mqya garda tmile malai dhoka diyeuu","kinw bolako k jhanna kp oli ko natini fasai skeyko thye","malai vote gara ma nepal lai amrika banai dinxu 😻 ","moh sher bdr deuba ji lai eti vanna chahnxu ki yo bot bot vanne jati sab pagal lai mental hospital ko bato dekhaidinuss","RKO BRO ko maaya ma dubeuu haina??😿","mah aile bot hu ta eti maya grxau human vako vaye ajai bihe hunthyo ani voli palta bihe😘","babe tmi sachikai eti Ramro ho ki mero akha ko Power badhyo","dimag maa ta tmro bare sochda ta rangsala khele jhai lagxa ta k ho😃","finally i m in love with you","sorry I have a poifriend","dhoka dina ta koi tmi bata sikhoss","jeans launa naskne baini ni boy vnxan ta k ho tmlai vnya haina hai uslai vneko","tmro koi cousin single xa? xa vane yaso budi banai deuna","Systemm faad dungaa chup kar","Systeem faad dengi💥","kate bot vaneko i love you admin ni vana","k bolyaa vai","yaaa vai tmi kun garhaa bata aako😒","Rukoo jara sabar karo","I'm waiting for iPhone 18 because I'm not buying iPhone that is underage😂😒🔥"," love you babe kiss deuna malai pani kati afno babe lai matra denxau k 😂 "," K xa babe chuppa deuna mero maya lagdaina timilai","vana darlingg k vayoo"," aunty hoki uncle ho🤔 boksi jataii dekhxa ta hau ","😑😑vana k vayoo","🤨🤨mula katii bolakoo busyy xuu tw jastoo free huna ma ","love you babe kiss deuna malai pani kati afno babe lai matra denxau k 😂","sab le malai afno babe off hunda matra samjhenxa aafno babe online ayese sab le birsenxa 😂","na hera malai tesarii maya baslaa haii besariii 😂","timro akha ma here rahu jhaii lagxa tra timro akha arkako babe tera lagxa kinna 😂","photo dekhaauna meroo ramri babe😾💁‍♂️","Inna Sarra🤏", "OkkaY chanda ki hun yawr mai", "😁Smile I am Taking Selfy✌️🤳", "🥺Jan nahi kehna to men naraz ho jana he", "Block Your ‘’ gf ‘’ And Purpose me 🙂💔" ,"K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂","Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per kal mil Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "bbu muje perpose karo na🤧", "tuje dekha to essa laga chand mere samne h😍", "menu bs teri ek chumi de de sona😚", "kalp gya kya mujse chal ab daru pila😀", "teri bbu muje inbox me msg kar rhi h😞", "abye suar", "bbu sun na teri sakal nhi h achi powder laga le 😂", "haw haw tu tó garibo ka masiha h na 😂", "systummmm apna chalta h elvish to chela h mera😐", "La la vayo aba Sut ki ma ni aaune ho 💋babe" , "1 Night ko 3000 dinxu😎🔥 codeing gardeu" , "Aau sutna Timro gar ma sutna dedainan hola hai 😂" , "Room Khali vaya Bolau na malai🧨😴" , "Room ma ko ko xau bolau na malai sutna man lagyo🙁nin layo" , "Yo garmi ma ajoi Hot huna xa vane bolau malai🔥" , "Aaija khana mero lalipop😌👀 yo feri🍭" , "mero boss RKO BRO lai soji kte khojdeuna 🥺" , "k vo afno girlfriend dinxasra malai bolako😒" , "K vo ba Tero budi lagera vageko jsre bolish ta😒😴" , "Yesari Hanxu ni ... tya 🙄aafai buj" , "Kate bot vanya buda vanera sutna ni bola😑😴" , "Kate Chateko mero.. dimak feri🙄👀"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("😂😂😂") || input2.includes("hihi") || input2.includes("😆😆😆") || input2.includes("lol") || input2.includes("😂") || input2.includes("😹") || input2.includes("🤣") || input2.includes("😆") || input2.includes("😄") || input2.includes("😅") || input2.includes("bete")){
					        	return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
} 
    if(input2.includes("dead") || input2.includes("ake") || input2.includes("bhag") || input2.includes("nik") || input2.includes("death") || input2.includes("go away") || input2.includes("sed") || input2.includes("jhag") || input2.includes("fyt") || input2.includes("fight") || input2.includes("nafrat") || input2.includes("accident") || input2.includes("divorce") || input2.includes("break Up") || input2.includes("sad") || input2.includes("alone") || input2.includes("hate") ||input2.includes("need") || input2.includes("mar") || input2.includes("janaza")){
					        	return api.setMessageReaction("😢", event.messageID, (err) => {}, true)
    }
  if(input2.includes("himal") || input2.includes("RKO BRO") || input2.includes("Himal") || input2.includes("mr tom") || input2.includes("love") || input2.includes("RKO") || input2.includes("holy") || input2.includes("rko") || input2.includes("temp") || input2.includes("pak") || input2.includes("ind") || input2.includes("islam") || input2.includes("muslim") || input2.includes("hindu") || input2.includes("bible") || input2.includes("allah") || input2.includes("god") || input2.includes("bhagwan") || input2.includes("gita") || input2.includes("quran") || input2.includes("shadi") || input2.includes("marry") || input2.includes("chum") || input2.includes("kiss") || input2.includes("heart") || input2.includes("pyar") || input2.includes("muhabbat") || input2.includes("mohabbat") || input2.includes("jan")){
					        	return api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
}
  if(input2.includes("fuck") || input2.includes("lund") || input2.includes("gali") || input2.includes("ladoo") || input2.includes("chak") || input2.includes("rand") || input2.includes("bc") || input2.includes("bxdk") || input2.includes("bkl") || input2.includes("gandu") || input2.includes("mc") || input2.includes("chod") || input2.includes("lun") || input2.includes("lora") || input2.includes("gan")){
					        	return api.setMessageReaction("🤬", event.messageID, (err) => {}, true)
}

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
