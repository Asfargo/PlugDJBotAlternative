API.on(API.CHAT, chat);
function chat(data) {
        
        var waitlist = API.getWaitList();
        if(data.message.indexOf("Iniciar05") > -1)
        {
            API.chatLog("Iniciar0X (X = 5 se for flood) @" + API.getDJ().username, false);


            {
                API.sendChat("Hello @" + waitlist[0].username + " @" + waitlist[1].username + " @" + waitlist[2].username + " @" + waitlist[3].username + " @" + waitlist[4].username + " @" + waitlist[5].username + " @" + waitlist[6].username + " @" + waitlist[7].username + " @" + waitlist[8].username + " @" + waitlist[9].username + " @" + waitlist[10].username + " @" + waitlist[11].username + " @" + waitlist[12].username + " @" + waitlist[13].username + " @" + waitlist[14].username + " @" + waitlist[15].username + " @" + waitlist[16].username + " @" + waitlist[17].username + " @" + waitlist[18].username + " @" + waitlist[19].username + " @" + waitlist[20].username + " @" + waitlist[21].username, false);
            }

            API.chatLog("", false);
        }
        }
        API.chatLog("Iniciar05");

        

API.on(API.CHAT, chat);
function chat(data) {
        
        var waitlist = API.getUsers();
        if(data.message.indexOf("Iniciar03") > -1)
        {
            API.chatLog("Iniciar0X (Se for flood X = 3) " + API.getDJ().username, false);


            {
                API.sendChat("Hello @" + waitlist[0].username + " @" + waitlist[1].username + " @" + waitlist[2].username + " @" + waitlist[3].username + " @" + waitlist[4].username + " @" + waitlist[5].username + " @" + waitlist[6].username + " @" + waitlist[7].username + " @" + waitlist[8].username + " @" + waitlist[9].username + " @" + waitlist[10].username + " @" + waitlist[11].username + " @" + waitlist[12].username + " @" + waitlist[13].username + " @" + waitlist[14].username + " @" + waitlist[15].username + " @" + waitlist[16].username + " @" + waitlist[17].username + " @" + waitlist[18].username + " @" + waitlist[19].username + " @" + waitlist[20].username + " @" + waitlist[21].username, false);
            }

            API.chatLog("", false);
        }
        }
        API.chatLog("Iniciar03");










// Original

API.on(API.CHAT, chat);
function chat(data) {
        
        var waitlist = API.getWaitList();
        if(data.message.indexOf("!") > -1)
        {
            API.chatLog(" ", false);
            API.chatLog("Automated message Waitlist! ", false);
            API.chatLog("Hi @" + API.getDJ().username, false);


        for (var i in waitlist) {
                API.sendChat("Automated message: " + waitlist[i].username, false);
            }

            API.chatLog(" ", false);
        }
        }
        
