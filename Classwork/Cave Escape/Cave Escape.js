

function StorePlayerData()
{
var name = document.forms[0]["playername"].value;
localStorage.setItem("playername", name);

var colour = document.forms[0]["playercolour"].value;
localStorage.setItem("playercolour", colour);
}

var roomObject = {
	title:'room name',
	text:'you are standing in a room, there is a picture on the wall and a table',
	choices:['examine picture','examine table']
}

function OnLoad()
{


}
