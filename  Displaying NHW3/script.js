function getFormValue(){

	let fNam = document.getElementById("fname").value;
	let lNam = document.getElementById("lname").value;
	document.getElementById("etext").innerHTML = "Hello " + fNam + ' ' + lNam;
}