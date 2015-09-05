API.on(API.CHAT, chat);
 
function chat(data) {
 
        var role = API.getUser(data.fromID).permission;
        botrole = API.getUser().permission;
        if(data.message.indexOf("!Command1") > -1)
        {
                API.moderateDeleteChat(data.cid);
                API.sendChat("/me [" + data.un + "] This is the response for Command 1!");
 
        }
        if(data.message.indexOf("!Command2") > -1)
        {
                API.moderateDeleteChat(data.cid);
                API.sendChat("/me [" + data.un + "] This is the response for Command 2!");
        }
                if(data.message.indexOf("!Lock") > -1)
        {
                API.moderateDeleteChat(data.cid);
                API.sendChat("/me [" + data.un + "] Waitlist locked!");
                API.moderateLockWaitList(true);
        }
                if(data.message.indexOf("!Unlock") > -1)
        {
                API.moderateDeleteChat(data.cid);
                API.sendChat("/me [" + data.un + "] Waitlist unlocked!");
                API.moderateLockWaitList(false);
        }
}
