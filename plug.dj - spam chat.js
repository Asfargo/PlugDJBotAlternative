var a = setInterval(function(){
API.sendChat("This is spam. lol");
}, 100);

API.on(API.CHAT, function(data){

if(data.message == ('.stop'){ //TO STOP SPAM, TYPE '.STOP'
API.moderateDeleteChat(data.chatID);
API.sendChat("I stopped spam, k");
}

if(data.message == ('.spam'){ //TO START SPAM, TYPE '.SPAM'
API.moderateDeleteChat(data.chatID);
a();
}
});
