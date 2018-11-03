let color = ['BLUE', 'GREEN', 'RED', 'ORANGE', 'VIOLET', 'INDIGO', 'YELLOW'];
let o = ['th', 'st','nd','rd'];
console.log(o);
console.log(color);


let colorCount = [];
	for (i = 0; i < color.length; i++) {
		if(i<3){
			document.getElementById("display").innerHTML +=  ` 
		 ${i+1}${o[i+1]}  choice  is  ${color[i]} <br>`;
		}else{
			document.getElementById("display").innerHTML +=  ` 
		 ${i+1}${o[0]} 	 choice  is  ${color[i]} <br>`;
		}
		
	}
