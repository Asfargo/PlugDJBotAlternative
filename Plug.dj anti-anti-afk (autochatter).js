// Made because @Nantes was using an anti-afk bot for people in the DJ queue. If you use this script, you will likely be banned. I mean... it says the same things over and over. They will catch on quickly. If you want, change the responses or add more. 
// Updated for the new winter layout (Switch from Models.*.* to API.*)

var waitBase = 3600; // DEFAULT: 3600s (1 hour)
var waitVar = 1800; // DEFAULT: 1800 (0.5 hour)

var responses = ["nice song", "I love this song!", "woo!", ":D", ":)", "NIIICE", "love this", "this is very good", "I'm gonna save this for later", "beautiful!"];

function speak()
{
	var message = "";
	if(getRandom(0, 100) >= 50)
	{
		message = "@" + API.getDJs()[0].username + " ";
	}
	message += responses[getRandom(0, responses.length)];
	API.sendChat(message);
	setTimeout(function(){speak();}, (waitBase + getRandom(0, waitVar))*1000);
}

function getRandom(min, max)
{
	return Math.floor(Math.random()*max + min);
}
