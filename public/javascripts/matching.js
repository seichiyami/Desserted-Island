//our database of ppl
var people = [];
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
people[4] = {
    firstName:"Johnson",
    lastName:"Doe",
    email:"hello@gmail.com",
    favList: [2, 5, 6, 7]
    //add photo
};
people[5] = {
    firstName:"Son",
    lastName:"Doe",
    email:"hello@gmail.com",
    favList: [6,7, 6, 10]
    //add photo
};
people[6] = {
    firstName:"Lon",
    lastName:"Doe",
    email:"hello@gmail.com",
  favList: [4, 8, 4, 5]
    //add photo
};
people[7]= {
    firstName:"Rolando",
    lastName:"Doe",
    email:"hello@gmail.com",
    favList : [6, 2, 1 ,9]
    //add photo
};
people[8] = {
    firstName:"Jackson",
    lastName:"Doe",
    email:"hello@gmail.com",
    favList: [1, 9, 3 ,8]
    //add photo
};


//our user
var person = {
    firstName:"John",
    lastName:"Doe",
    email:"hello@gmail.com",
    favList: [1, 1, 1, 1],
    match: people[0]
    //add photo
};

$("#submitButton button").on("click", function(event){
      setFavs();

});

function setFavs() {
    var chosenBook = document.getElementById("books").selectedIndex;
	var chosenMovie = document.getElementById("movies").selectedIndex;
	var chosenFood = document.getElementById("food").selectedIndex;
	var chosenGame = document.getElementById("games").selectedIndex;
	person.favList[0]= chosenBook;
	person.favList[1]= chosenMovie;
	person.favList[2]= chosenFood;
	person.favList[3]= chosenGame;
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
	var output = JSON.stringify(person.match);
	$('.center_box .output').append(output);

	console.log("Your match = ", person.match);
}
