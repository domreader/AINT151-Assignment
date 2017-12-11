var playerName = localStorage.getItem("playername");

var roomArray = [
	{
		title:'The Awakening',
		text: playerName +' has awoken in a dark cave. The room is a box shape with a door with a small crack in it which allows a small amount of light through',
		choices:[
			{
				text:'Inspect the room',
				index:1
			},
			{
				text:'Look through the crack',
				index:1
			}
		]
	},
	{
		title:'Inspecting the room',
		text:'As' + playerName +  'looks around the room they go to the far wall and study it. However currently it is too dark to notice anything prominent. Maybe there is a way to brighten up the room?',
		choices:[
			{
				text:'Look through the Crack',
				index:2
			}
		]
	},
	{
		title:'Through the crack',
		text:'You wonder towards the door and look through the crack. On the other side there is a guard sat there next to a sword. The floor and walls are all made out of stone and have an oppressive feel to them',
		choices:[
			{
				text:'Try to pull the door open',
				index:3
			},
					]
	},
	{
		title:'Try to open door',
		text:'You pull on the door hard rattling its heavy frame but it does not move. However from the noise the guard has stirred and is walking towards the door. He yells at you "Back away from the door". As you back up he unlocks the door and rushes in towards you with his sword drawn.',
		choices:[
			{
				text:'Side step the guard',
				index:4
			}
		]
	},
  {
		title:'Side step the guard',
		text:'Using quick instincts you side step the guard pulling his sword away from him. As you wield the blade you have the choice to either spare or end him. What will you do?',
		choices:[
			{
				text:'Spare the guards life',
				index:5
			},
			{
				text:'End the guards life',
				index:6
			}
		]
	},
  {
		title:'Spare the guards life',
		text:'You look at the guard and offer to spare him if he lets you retrieve your items from the chest and lets you keep the sword. He accepts your offer and gives you the key for the chest. You take the sword and retrieve your stuff from the chest.',
		choices:[
			{
				text:'Proceed to the next room',
				index:7
			}
		]
	},
	{
		title:'End the guards life',
		text:'You double back and stab the guard through the stomach, the sword pulls out as he falls to the floor. You take the key for the chest off of him. You exit the room and retrieve your stuff from the chest',
		choices:[
			{
				text:'Proceed to the next room',
				index:7
			}
		]
	},
	{
		title:'Proceed to the next room',
		text:'You enter the next room and see a starcase to the next floor, around the room there are wooden tables and chairs. On top of these there are documents and other items.',
		choices:[
			{
				text:'Inspect the war room',
				index:8
			},
			{
				text:'Head up the stairs',
				index:9
			}
		]
	},
	{
		title:'Inspecting the war room',
		text:'You look around the table closer and you can see many different documents. One is a news article on a way to break out of chains, another is arts of fighting and the last is a cookbook. Mostly these are useless.',
		choices:[
			{
				text:'Head up the stairs',
				index:9
			}
		]
	},
	{
		title:'Head up the stairs',
		text:'As you head up the narrow staircase you can hear a low growl in the next room. Nervously you approach to see what could be making this noise behind the door.',
		choices:[
			{
				text:'Proceed to the next room',
				index:10
			}
		]
	},
	{
		title:'Finding the demon',
		text:'In the centre of the room with its back to you there is a dark figure, it has a dark aura surrounding it which makes it very clear it is not human. The creature makes a low growl which echoes inside of the walls becoming deafening. You wield your sword.',
		choices:[
			{
				text:'Start the battle',
				index:11
			}
		]
	},
	{
		title:'Starting the battle',
		text:'The demon turns and to your shock the blood red eyes stare deep into you making you feel uneasy. Summoning the might you have you stand tall and get ready to take on this unholy creature, when suddenly he shifts to the other side of the room through you.',
		choices:[
			{
				text:'Swing your sword around',
				index:12
			},
			{
				text:'Go back down the stairs',
				index:13
			}
		]
	},
	{
		title:'Swing your sword around',
		text:'You swing your sword violently around you in an arc trying to attack the demon and you finally get a hit. The demon recoils back and falls to a knee as black blood drips down from the cut on its side; looking into its eyes you still see no trace of fear or worry but instead the demon bares its teeth almost like a smile.',
		choices:[
			{
				text:'Stab the demon',
				index:14
			}
		]
	},
	{
		title:'Go back down the stairs',
		text:'You decide to rush towards the stairs and proceed to go down them. However in your haste you trip and fall down the remaining stairs;  the demon stands at the top of the staircase staring at you still with the blood red eyes.',
		choices:[
			{
				text:'Head back towards the cell',
				index:15
			}
		]
	},
	{
		title:'Demon Attack',
		text:'You move forward and push the sword forward into the demons chest. As you continue to push it the tip of the sword does not come out of its back but instead seems to being absorbed until it disappears fully and then your hand follows it. The pain is unbearable as blood drips down from your hand then arm. You feel your body go numb as you drop to the floor.',
		choices:[
			{
				text:'Continue',
				index:16
			}
		]
	},
	{
		title:'Back towards the cell',
		text:'You get back up on your feet and run towards the cell. The further you run down the corridor it seems as if it is forever ending; whether this is what it seems or there are tricks being played upon you is unclear. The demon is stood at the beginning of the corridor with his head tilted sideways staring at you still. Finally you reach the end of the corridor/',
		choices:[
			{
				text:'Into the cell',
				index:17
			}
		]
	},
	{
		title:'Death',
		text:'Unfortunately you have failed in escaping. Maybe next time?',
		choices:[
			{
				text:'Restart the battle',
				index:11
			}
		]
	},
	{
		title:'Into the cell',
		text:'You go back into your cell and the torch illuminates the once dark walls and a message is inscribed upon the wall saying "Drop your weapons and the fight will be won". As you read this the demon enters the room standing at the doorway. It stares at you and awaits to see what you are going to do next.',
		choices:[
			{
				text:'Drop your weapons',
				index:19
			}
		]
	},
	{
		title:'Survival',
		text:'You drop your weapons and the demon watches them fall to the floor. A loud scream is heard all around as everything goes bright and blinds you; you pass out and wake up back at home in bed. It seems as if it was all a dream, or was it?',
		choices:[
			{
				text:'Continue',
				index:20
			}
		]
	},
	{
		title:'Winning',
		text:'Congratualtions, you have beaten Cave Escape. Now go and proceed to waste your time on another game, go on. Get out of here :)!',
		choices:[
			{
				text:'Restart the game - Only one ending though so good luck!',
				index:0
			}
		]
	}
]
