var roomObject =
{
	title:'room name',
	text:'you are standing in a room, there is a picture on the wall and a table',
	choices:['examine picture','examine table']
}


function OnLoad()
{
	var title = <h3> "roomObject.title" </h3>;
	document.getElementById("roomtitle").innerHTML("title");

	var text = <p> "roomObject.text" </p>;
  document.getElementById("roomtext").innerHTML("text");

	var choies = <div> "roomObject.choices" </div>;
	document.getElementById("roomchoices").innerHTML("choices");
}
}
