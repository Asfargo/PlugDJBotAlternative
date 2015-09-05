API.on(API.CHAT, chat);
function chat(data) {
        var role = API.getUser(data.fromID).permission;
        botrole = API.getUser().permission;
        if(data.message.indexOf("@Asfargo R.") > -1)
        {
                API.moderateDeleteChat(data.cid);
                API.sendChat("@" + data.un + " estou ausente (:");
        }
        }
