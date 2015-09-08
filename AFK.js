API.on(API.CHAT, chat);
function chat(data) {
        var role = API.getUser(data.fromID).permission;
        botrole = API.getUser().permission;
        if(data.message.indexOf("@Asfargo R.") > -1)
        {
                API.moderateDeleteChat(data.cid);
                API.sendChat(":warning: @" + data.un + " I'm AFK. / Estou ausente. :sweat_smile:");
        }
        }

API.on(API.CHAT, chat);
function chat(data) {
        var role = API.getUser(data.fromID).permission;
        botrole = API.getUser().permission;
        if(data.message.indexOf("Avagon") > -1)
        {
                API.moderateDeleteChat(data.cid);
                API.sendChat(":warning: @" + data.un + " I'm AFK. / Estou ausente. :sweat_smile:");
        }
        }
