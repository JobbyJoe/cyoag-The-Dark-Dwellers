let rooms = {
	
	//room0
	"start": {
		"description":
		"<b>YOU NOTICE A MELTED DEFORMED FIGURE. FRAIL IN APPEARANCE.\
		ITS SKIN GLOWS AN UNHEALTHY SPECTRAL LUMINESCENCE AND IS COVERED WITH SORES THAT\
		BUBBLES AND OOZES. YOU NOTICE THAT YOU ARE IN A SEWER DUE TO THE RUNNING STREAM OF\
		FECES AND TRASH TO YOUR RIGHT WHICH ALSO LEADS OFF DOWN INTO A TUNNEL TO THE NORTH OF YOU...</b>",
		
		"directions": {
			"north": "tunnel"
		},
		
		"items": {
			"Lantern": "old lantern",
		
			"examinedescription": 
			"<b>YOU SEE A DUSTY OLD LANTERN.</b>",
			
			"pickupdescription":
			"<b>YOU PICKUP THE LANTERN.</b>",
			
			"usedescription":
			"<b>YOU USE THE LANTERN. YOUR PATH IS LIT BETTER</b>"
		},
	
		"persons": {
			"Harold": "melted deformed figure",
		
			"persondescription":
			"<b>HELLO FRIEND! YOU LOOK A BIT STARTLED THERE. (Looks down at himself). OH...\
			SORRY SOMETIMES I FORGET HOW LONG I'VE BEEN DOWN HERE. START TO FORGET WHAT I LOOK\
			LIKE OR EVEN WHO I AM. ONLY THINK I REMEMBER ABOUT MYSELF IS THAT MY NAME IS HAROLD.\
			NICE TO MEET YOU! WHAT'S YOUR NAME? (You tell him you can't remember, he laughs) WELL\
			I GUESS WE BOTH HAVE SOMETHING IN COMMON. (You ask him what is this place) THEY CALL\
			THIS PLACE THE UNDERGROUND. IT'S WHERE M.O.M.'S WORST CREATIONS COME TO SEEK REFUGE FROM\
			HER. (you ask who's M.O.M.) YEARS BACK A GROUP CALLED \"THE INSTITUTE OF HEALTH\" DECIDED\
			TO BUILD AN A.I. CALLED M.O.M. WHICH STANDS FOR MULTI-OPERATIONAL MASTERCOMPUTER. THE MACHINE\
			WAS CREATED BY THE INSTITUTE TO HELP HUMANITY BY CURING VIRUSES AND DISEASES BUT M.O.M.\
			STARTED USING HER OWN LITTLE HUMAN GUINEA PIGS TO HELP ADVANCE HER KNOWLEDGE. IF SHE\
			COULDN'T CURE THEM IN HER EYES, THEN SHE WOULD JUST DISPOSE OF THEM CAUSING VAST GENOCIDE.\
			THIS HAS LEFT THE WORLD IN RUINS. SOME OF THE ONES WHO DID SURVIVE WERE LEFT HORRIBLY\
			DISFIGURED AND DISFORMED... LIKE ME,(Harold scrunches up his face to stop him from crying)\
			RESORTING IN THEMSELVES TO DWELL IN THE SEWERS TO HIDE FROM THE REST OF HUMANITY. BUT THERE\
			ARE RUMOURS OF A RESISTANCE GROUP CALLED \"THE RESURGENCE\" NORTH OF HERE WHO ARE RECRUITING PEOPLE\
			YOU SHOULD HEAD IN THAT DIRECTION MAYBE THEY CAN HELP YOU GET BACK YOUR MEMORY\
			(you shake Harold's hand and say goodbye, your hand has a slimy residue on it now) </b>",
		}			
	},		
	
	//room1
	"tunnel": {
		"description": 
		"<b>YOU WALK THROUGH THE DARK TUNNEL NOTICING THE WALLS ARE COVERED IN GRIME AND CRUD.\
		SLUDGING THROUGH THE MURKY STREAM YOU HEAR THE SOUND OF SCREECHING AND SCUTTLING COMING\
		FROM THE END OF THE TUNNEL. YOU THINK TO YOURSELF ABOUT WHAT KIND OF CREATURE COULD MAKE THAT SOUND AND\
		QUESTION IF YOU SHOULD TURN AROUND BUT YOU DECIDE TO CARRY ON...</b>",
		
		"directions": {
			"south": "start",
			"north": "ratRoom"
		}
	},
	
	//room2
	"ratRoom": {
		"description": 
		"<b>WHEN COMING TO THE END OF THE TUNNEL YOU SQUINT AT THE BACK OF\
		THE LARGE VAST ROOM SEEING A PAIR OF RED EYES STARING BACK AT YOU. A BEAD OF SWEAT\
		RUNS DOWN THE FRONT OF YOUR BROW. THE CREATURE LOOKS CLOSEST TO A\
		RAT BUT LARGER THAN ANY MAN. BELOW THE RED EYES YOU SEE A SET OF WHISKERS TWITCHING\
		WHICH LOOKS CLOSER TO SET OF STEEL REBAR. FEARING THAT IT WILL ATTACK AT ANY SECOND YOU DECIDE\
		TO MOVE. YOU SEE TWO EXITS, ONE TO YOUR LEFT AND ANOTHER TO YOUR RIGHT...</b>",
		
		"directions": {
			"south": "tunnel",
			"east": "pathToRight",
			"west": "pathToLeft"
		},
		
		"enemies": {
			"Creature": "Giant creature that looks like a rat",
			
			"enemydescription":
			"<b>YOU TRY TO TAKE ATTACK THE GIANT CREATURE WITH YOUR KNIFE BUT YOUR ATTACKS WERE VERY UNEFFECTIVE.\
			THE CREATURE SLAMS ONE HIS LARGE PAWS ON TOP OF YOU CRUSHING YOU INSTANTLY... WOULD YOU LIKE TO PLAY AGAIN? Y/N</b>"
		}	
	},
	
	//room3
	"pathToLeft": {
		"description":
		"<b>YOU RUN DOWN THE TUNNEL AWAY FROM THAT CREATURE. AT THE END OF THE TUNNEL YOU SEE A RAILWAY WAY TRACK.\
		YOU DECIDE TO FOLLOW IT. AFTER A COUPLE OF MINUTES OF WALKING TO SEE A PASSAGE AHEAD OF YOU...</b>",
		
		"directions": {
			"south": "ratRoom",
			"north": "passage"
		}
	},	
	
	//room4
	"pathToRight": {
		"description": 
		"<b>YOU RUN DOWN THE TUNNEL AWAY FROM THAT CREATURE. AT THE END OF THE TUNNEL YOU SEE A TROPHY ROOM WITH GOLD BARS\
		AND A GUN WITH AMMUNITION...</b>",
		
		"directions": {
			"south": "ratRoom",
			"north": "trophyRoom"
		}
	},
	
	//room5
	"trophyRoom": {
		"description":
		"<b>INFRONT OF THE TREASURE SITS A FOWL LITTLE HUMANOID CREATURE WHOSE HAIR IS UNKEMPT AND\
		UNBATHED. YOU PARTIALLY GAG AT THE SMELL. YOU SEE IT SMILING AND TAUTING YOU WHILE CLAPPING ITS HANDS. YOU FIGURE OUT A\
		WAY TO GET PAST THIS THING...</b>",
		
		"directions": {
			"south": "pathToRight",
		},
		"enemies": {
			"Creature": "Dirty little creature",
			
			"enemydescription":
			"<b>YOU STAB THE CREATURE WITH YOUR KNIFE AND IT INSTANTLY DIES</b>",
		},
		"items": {
			"Gold Bars": "Shiny golden bars",
			"Gun": "A gun with ammunition",
			
			"examinedescription":
			"<b>YOU SEE A SET OF GOLD BARS AND A GUN WITH AMMUNITION</b>",
			
			"pickupdescription":
			"<b>YOU PICKUP THE GOLD BARS AND GUN</b>"
		}
	},		
	//room6
	"passage": {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
		"description":
		"<b>WALKING THROUGH YOU HEAR A LARGE RUMBLE AS YOU NOTICE THE PILLARS HOLDING UP THE PASSAGE ARE STARTING TO FALL APART.\
		YOU QUICKLY LEAP TO SAFETY ALMOST BEING SQUASHED BY THE FALLING DEBRIS. UNFORTUNATELY WHEN YOU LAND YOU SUFFER A\
		CONCUSSION. AS YOU LAY ON THE FLOOR YOU HEAR SOMEONE CALLING OUT TO YOU. LOOK UP AND SEE A GROUP OF PEOPLE COMING\
		TOWARDS YOU EACH HOLDING ASSAULT RIFLES. THEY DRAG YOU AWAY...TO BE CONTINUED... WOULD YOU LIKE TO PLAY AGAIN? Y/N </b>"
	}
}
