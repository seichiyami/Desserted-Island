
 function display() {
    var chosenBook = document.getElementById("books").selectedIndex;
	var chosenMovie = document.getElementById("movies").selectedIndex;
	var chosenFood = document.getElementById("food").selectedIndex;
	var chosenGame = document.getElementById("games").selectedIndex;
	console.log (chosenBook);
	console.log (chosenMovie);
	console.log (chosenFood);
	console.log (chosenGame);
}
 var chosenBook = document.getElementById("books").selectedIndex;
	var chosenMovie = document.getElementById("movies").selectedIndex;
	var chosenFood = document.getElementById("food").selectedIndex;
	var chosenGame = document.getElementById("games").selectedIndex;
	console.log (chosenBook);
	console.log (chosenMovie);
	console.log (chosenFood);
	console.log (chosenGame);


	$("#submitButton button").on("click", function(event){
      display();
});
