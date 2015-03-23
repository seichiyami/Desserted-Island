var people = [];
var person = {
    firstName:"John",
    lastName:"Doe",
    email:"hello@gmail.com",
    favList: [1, 1, 1, 1],
    match: people[0]
    //add photo
};
people[0] = {
    firstName:"Jon",
    lastName:"Doe",
    email:"hello@gmail.com",
    favList: [2, 3, 4, 5]
    //add photo
};
people[1] = {
    firstName:"ohn",
    lastName:"Doe",
    email:"hello@gmail.com",
  favList: [4, 1, 4, 5]
    //add photo
};
people[2]= {
    firstName:"Jo",
    lastName:"Doe",
    email:"hello@gmail.com",

    favList : [2, 2, 4 ,1]
    //add photo
};
people[3] = {
    firstName:"J",
    lastName:"Doe",
    email:"hello@gmail.com",
    favList: [3, 3, 1 ,2]
    //add photo
};


$("#submitButton button").on("click", function(event){
      display();
});

function display() {
    var chosenBook = document.getElementById("books").selectedIndex;
	var chosenMovie = document.getElementById("movies").selectedIndex;
	var chosenFood = document.getElementById("food").selectedIndex;
	var chosenGame = document.getElementById("games").selectedIndex;
	console.log (chosenBook);
	console.log (chosenMovie);
	console.log (chosenFood);
	console.log (chosenGame);
	person.favList[0]= chosenBook;
	person.favList[1]= chosenMovie;
	person.favList[2]= chosenFood;
	person.favList[3]= chosenGame;
	console.log("person array", person.favList);
	console.log("personss array", people[1].favList);
  	matching();
}
function matching(){
	
	var currentMatch=0;
	var prevMatch=0;
	var matchingPerson;

	for	(var index = 0; index < people.length; index++) {
		currentMatch=0;
    	for	(var i= 0; i < 4; i++) {
    		if(people[index].favList[i] === person.favList[i]){
    			currentMatch++;
    			matchingPerson = people[index];
    		}
    	}
    	if(currentMatch > prevMatch){
    		person.match= matchingPerson;
    		prevMatch = currentMatch;
    	}
    	
	} 

	console.log("your match = ", person.match);
}
