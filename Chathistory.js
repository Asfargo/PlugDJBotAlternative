API.on(API.CHAT, chatEvent);
var chatLog = true;
chatCount = 0;


function chatEvent(data) { 
	chatCount++;
        if (chatLog)
        console.log("[" + data.timestamp + " | " + data.uid + " | " + data.un + "]: " + data.message);

}
