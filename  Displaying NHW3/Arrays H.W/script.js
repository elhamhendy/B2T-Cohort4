let currentFruits = ["apple","orange","kiwi"];
document.getElementById("currentFruits").innerHTML= currentFruits;

function addFruitToEnd(){
	let newFruit = prompt("enter fruit: ");
	currentFruits.push(newFruit);
	currentFruits.sort();
	
	document.getElementById("currentFruits").innerHTML = currentFruits.join(" with ");

}









