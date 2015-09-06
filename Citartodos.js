API.on(API.CHAT, chat);
function chat(data) {
        
        var waitlist = API.getWaitList();
        if(data.message.indexOf("@djs") > -1)
        {
            API.chatLog("", false);
            API.chatLog("", false);
            API.chatLog("Hi @" + API.getDJ().username, false);


            {
                API.sendChat("Ola @" + waitlist[1].username + " @" + waitlist[2].username + " @" + waitlist[3].username + " @" + waitlist[4].username + " @" + waitlist[5].username + " @" + waitlist[6].username + " @" + waitlist[7].username + " @" + waitlist[8].username + " @" + waitlist[9].username + " @" + waitlist[10].username + " @" + waitlist[11].username + " @" + waitlist[12].username + " @" + waitlist[13].username + " @" + waitlist[14].username, false);
            }

            API.chatLog("", false);
        }
        }
        
