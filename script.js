//game variables
let currentRoom = "start";									//Initial room
let commands = ["Go", "Pickup", "Examine", "Use", "Attack", "Talk"]; //All the commands the player can enter
let inventory = ["Lighter", "Knife", "Map"];              	//All the items in player's inventory

function changeRoom(dir) {	//This function allows the player to change the room
	if(rooms[currentRoom].directions[dir] !== undefined) {
		currentRoom = rooms[currentRoom].directions[dir];
		$("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
	} else {
		$("#game-text").append("<p><b>You cannot go that way!</b></p>");
	}
}

function showHelp() { //This function allows the player to see all the commands in a list
	$("#game-text").append("<p><b>Here are the possible commands: </b></p>");
	$("#game-text").append("<p><ul>");
	for(var i = 0; i < commands.length; i++) {
		$("#game-text").append("<li><b>" + commands[i] + "</b></li>");
	}
	
	$("#game-text").append("</ul></p>");

}

function showInventory() { //This function allows the player to see all the items in their inventory
	if(inventory.length === 0) {
		$("#game-text").append("<p>You are not carrying anything!</p>");
		return;
	}
	$("#game-text").append("<p><b>Here is your inventory: </b></p>");
	$("#game-text").append("<p><ul>");
	for(var i = 0; i < inventory.length; i++) {
		$("#game-text").append("<li><b>" + inventory[i] + "</b></li>");
	}
	
	$("#game-text").append("</ul></p>");
}

function attackEnemy() { //This function allows the player to attack enemies
	if(rooms[currentRoom].enemies !== undefined) {
		$("#game-text").append("<p>" + rooms[currentRoom].enemies.enemydescription + "</p>");
	} else {
		$("#game-text").append("<p>You can't attack that!</p>");
	}
}

function talkPerson() { //This function allows the player to talk to a person
	if(rooms[currentRoom].persons !== undefined) {
		$("#game-text").append("<p>" + rooms[currentRoom].persons.persondescription + "</p>");
	} else {
		$("#game-text").append("<p>You can't talk to that!</p>");
	}
}

function pickupItems(pickup) { //This function allowx the player to pickup an item
	if(rooms[currentRoom].items !== undefined) {
		$("#game-text").append("<p>" + rooms[currentRoom].items.pickupdescription + "</p>");
	} else {
		$("#game-text").append("<p>You can't pick that up!</p>");
	}
}

function useItems(use){
	if(rooms[currentRoom].items !== undefined){ //This function allows the player use items
		$("#game-text").append("<p>" + rooms[currentRoom].items.usedescription + "</p>");
	} else {
		$("#game-text").append("<p>You can't use that!</p>"); 
	}
}

function examineRoom(examine) { //This function allows the player to examine the room for items
	if(rooms[currentRoom].items !== undefined) {
		$("#game-text").append("<p>" + rooms[currentRoom].items.examinedescription + "</p>");
    } else {
    	$("#game-text").append("<p>You find nothing!</p>");
 	}
}	

function playAgain() {//This function allows the player to play again
	currentRoom = ("start");
	$("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
}

function playerInput(input) {//This function deals with the player's response
	let command = input.split(" ")[0];
	switch(command) {
		case "go":
			let dir = input.split(" ")[1];
			changeRoom(dir);
			break;
		case "help":
			showHelp();
			break;
		case "inventory":
			showInventory();
			break;
		case "pickup":
			let pickup = input.split(" ")[1];
			pickupItems(pickup);
			break;
		case "examine":
			let examine = input.split(" ")[1];
			examineRoom(examine);
			break;
		case "yes":
			let yes = input.split(" ")[1];
			playAgain(yes);
			break;
		case "use":
			let use = input.split(" ")[1];
			useItems(use);
			break;
		case "attack":
			let attack = input.split(" ")[1];
			attackEnemy();
			break;
		case "talk":
			let talk = input.split(" ")[1];
			talkPerson();
			break;
		default:
			$("#game-text").append("<p><b>Invalid command!</b></p>");
		
	}
}
	
$(document).ready(function(){//This function takes the player's response
	$("#game-text").append("<p>" + rooms.start.description + "</p>");
	
	$(document).keypress(function(key){
		if(key.which === 13 && $("#user-input").is(":focus")) {
			var value = $("#user-input").val().toLowerCase();
			$("#user-input").val("");
			playerInput(value);
		}
	})
})


