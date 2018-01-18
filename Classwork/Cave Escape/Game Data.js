var playerName = localStorage.getItem("playername");
var playerweapon = localStorage.getItem("playerweapon");

var roomArray = [
	{
		title:'The Awakening',
		text: playerName +' has awoken in a dark cave. The room is a box shape with a door with a small crack in it which allows a small amount of light through',
		choices:[
			{
				text:'Inspect the room',
				index:2
			},
			{
				text:'Look through the crack',
				index:3
			},
			{
				text:'Should I actually get up',
				index:1
			}
		]
	},
	{
		title:'Should I actually get up?',
		text:'You, yes you playing this game. Surely this is not going to be super interesting? Have they announced Half Life 3 yet?',
		choices:[
			{
				text:'Well now that we have got that out of the way.',
				index:0
			}
		]
	},
	{
		title:'Inspecting the room',
		text: playerName +' looks around the room they go to the far wall and study it. However currently it is too dark to notice anything prominent. Maybe there is a way to brighten up the room?',
		choices:[
			{
				text:'Look through the Crack',
				index:3
			},
			{
				text:'Inspect the toilet',
				index:4
			},
			{
				text:'Inspect the small hole in the wall',
				index:5
			}
		]
	},
	{
		title:'Through the crack',
		text: playerName +' wonders towards the door and look through the crack. On the other side there is a guard sat there next to a sword. The floor and walls are all made out of stone and have an oppressive feel to them',
		choices:[
			{
				text:'Try to open the door',
				index:6
			},
			{
				text:'Have you inspected the room you are in?',
				index:2
			}
		]
	},
	{
		title:'Inspect the toilet',
		text: playerName +' wonders over to the small metal toilet in the corner, looking in it there is no water and it seems to not be plumbed in. Definitely not luxury hotel standard.',
		choices:[
			{
				text:'Maybe there is something else to look at?',
				index:2
			}
		]
	},
	{
		title:'Inspect the small hole in the wall',
		text: playerName +' wonders towards the wall and peers through the small hole. This would be perfect to climb through if humans evolved to be super tiny. Maybe the next game?',
		choices: [
			{
				text:'Maybe there is something else to look at?',
				index:2
			}
		]
	},
	{
		title:'Try to open door',
		text:playerName +' pulls on the door hard rattling its heavy frame but it does not move. However from the noise the guard has stirred and is walking towards the door. He yells "Back away from the door". As '+playerName+' backs up he unlocks the door and rushes in with his sword drawn.',
		choices:[
			{
				text:'Side step the guard',
				index:7
			}
		]
	},
  {
		title:'Side step the guard',
		text:'Using quick instincts '+ playerName +' side steps the guard pulling his sword away from him. As '+playerName+' wields the blade they have the choice to either spare or end him. What will they do?',
		choices:[
			{
				text:'Spare the guards life',
				index:8
			},
			{
				text:'End the guards life',
				index:9
			}
		]
	},
  {
		title:'Spare the guards life',
		text:playerName +' looks at the guard and offer to spare him if he lets them retrieve the items from the chest. He accepts the offer and hands over the key for the chest. '+playerName+' takes the '+playerweapon+' from the chest.',
		choices:[
			{
				text:'Proceed to the next room',
				index:10
			}
		]
	},
	{
		title:'End the guards life',
		text: playerName+' doubles back and stabs the guard through the stomach, the sword sticks in him as he falls to the floor. '+playerName+' takes the key for the chest; exits the room and retrieves the '+playerweapon+' from the chest',
		choices:[
			{
				text:'Proceed to the next room',
				index:10
			}
		]
	},
	{
		title:'Proceed to the next room',
		text:playerName +' enters the next room and sees a staircase to the next floor, around the room there are wooden tables and chairs. On top of these there are documents and other items.',
		choices:[
			{
				text:'Inspect the war room',
				index:11
			},
			{
				text:'Head up the stairs',
				index:15
			}
		]
	},
	{
		title:'Inspecting the war room',
		text: playerName+' looks around the table closer and can see many different documents. One is an article on a way to break out of chains, another is arts of fighting and the last is a cookbook. Perhaps these could be useful skills to have.',
		choices:[
			{
				text:'Read the article on how to break out of chains',
				index:12
			},
			{
				text:'Head up the stairs',
				index:15
			},
			{
				text:'Read the article on the arts of fighting',
				index:13
			},
			{
				text:'Read the cookbook',
				index:14
			}
		]
	},
	{
	title:'How to break out of chains',
	text:'You are the lucky reciever of this article on how to get out of chains. Firstly you will need to posses some chains, next when in them to escape use the key. However if you do not have the key removal of limbs will work. Just clean the mess after',
	choices:[
		{
			text:'Well that was pointless',
			index:11
		}
	]
},
{
title:'The arts of fighting',
text:'Ever been in a fight you cannot win? Well this is an article for you on how to defeat an enemy who is more skilled than yourself. Firstly choose a weapon, fists will do however sometimes something like a pan could be better. Next proceed to see how your enemy strikes; apply appropriate counters to these attacks and voila. You probably have won. If not we accept no liability for your inadequacies and lack of ability.',
choices:[
	{
		text:'Good to know',
		index:11
	}
]
},
{
title:'Complete Cooking for Cooks',
text:'The book itself has fallen apart and is in pieces however the words you can see look like it may have once been useful but that is not the case now.',
choices:[
	{
		text:'Maybe someone ate the cookbook?',
		index:11
	}
]
},

{
		title:'Head up the stairs',
		text:'As '+ playerName +' heads up the narrow staircase they can hear a low growl in the next room. Nervously '+ playerName +' approaches to see what could be making this noise behind the door.',
		choices:[
			{
				text:'Proceed to the next room',
				index:16
			},
			{
				text:'Wait, what did the rest of the books say.',
				index:11
			}
		]
	},
	{
		title:'Finding the demon',
		text:'In the centre of the room with its back to the door is a dark figure, it has a dark aura surrounding it which makes it very clear it is not human. The creature makes a low growl which echoes inside of the walls becoming deafening. '+playerName+'wields the '+playerweapon+'.',
		choices:[
			{
				text:'Start the battle',
				index:17
			},
			{
				text:'The pacifist route',
				index:18
			}
		]
	},
	{
		title:'Starting the battle',
		text:"The demon turns and the shock of it's blood red eyes make "+playerName+" feel uneasy. Summoning the might "+playerName+" stands tall and get ready to take on this unholy creature. Suddenly the demon shifts to the other side of the room with a horrible high pitched whistle.",
		choices:[
			{
				text:'Swing the '+playerweapon+' around',
				index:19
			},
			{
				text:'Go back down the stairs',
				index:20
			}
		]
	},
	{
		title:'The pacifist route',
		text:"Seeing the demon "+playerName+" has somehow come to the conclusion that they could reason with this evil. As they open their mouth the demon gets bored and sits down sobbing at the thought of the possible excitement that could have been had if this unfortunate event produced a fighter instead. ",
		choices:[
			{
				text:'Let us rewind a little bit',
				index:16
			}
		]
	},
	{
		title:'Swing '+playerweapon+' around',
		text: playerName+' swings the '+playerweapon+' violently around in an arc trying to attack the demon and finally lands a blow. The demon recoils back and falls to a knee as black blood drips down from the hit; looking into its eyes there is still no trace of fear or worry but instead the demon bares its teeth almost like an evil grin.',
		choices:[
			{
				text:'Attack the demon',
				index:21
			}
		]
	},
	{
		title:'Go back down the stairs',
		text:playerName+" rushes towards the stairs and proceed to go down them. However in their haste they trip and fall down the remaining stairs;  the demon stands at the top of the staircase seemingly lifeless staring down with it's blood red eyes.",
		choices:[
			{
				text:'Head back towards the cell',
				index:22
			}
		]
	},
	{
		title:'Demon Attack',
		text:playerName+' moves forwards and swings the '+playerweapon+' into the demons chest. The weapon lands a hit however it cannot be pulled away; instead it seems to being absorbed until it disappears fully and then a hand follows it. The pain is unbearable as blood drips down from the hand then the arm. '+playerName+' feels their body go numb and drops to the floor.',
		choices:[
			{
				text:'Continue',
				index:23
			}
		]
	},
	{
		title:'Back towards the cell',
		text:playerName+' gets back up on their feet and runs towards the cell. The further they run down the corridor it seems as if it is forever ending; whether this is what it seems or there are tricks being played is unclear. The demon is stood at the beginning of the corridor with his head tilted sideways staring down the corridor. Finally '+playerName+' reaches the end of the corridor.',
		choices:[
			{
				text:'Into the cell',
				index:24
			}
		]
	},
	{
		title:'Death',
		text:'Unfortunately the escape is over. Maybe next time?',
		choices:[
			{
				text:'Restart the battle',
				index:17
			}
		]
	},
	{
		title:'Into the cell',
		text:playerName+' goes back into the cell and the torch illuminates the once dark walls and a message is inscribed upon the wall saying "Drop all weapons and the fight will be won". As this is read the demon enters the room standing at the doorway. It stands there waiting to see what will happen next.',
		choices:[
			{
				text:'Drop the '+playerweapon,
				index:25
			}
		]
	},
	{
		title:'Survival',
		text:playerName+' drops the '+playerweapon+' and the demon watches them fall to the floor. A loud scream is heard all around as everything goes bright and becomes blinding; this leads to '+playerName+' passing out and awakening back at home in bed. It seems as if it was all a dream, or was it?',
		choices:[
			{
				text:'Continue',
				index:26
			}
		]
	},
	{
		title:'Winning',
		text:'Congratulations, '+playerName+' has escaped from the cave hell. Now go and proceed to waste your time on another game, go on. Get out of here :)!',
		choices:[
			{
				text:'Restart the game',
				index:0
			}
		]
	}
]
