function work(){
	
	var x = document.getElementById("t1Input").value;
	var y = document.getElementById("t2Input").value;
	var z = document.getElementById("n1Input").value;
	var O = document.getElementById("output").innerHTML;
	
	alert("The Original HTML;\n" + O);
	
	/*for(var c=0;c<z;c++){
		
		O = O.concat("<br>"+x+" "+ y + "| Row number: " + c);
		window.stop()
	}
	alert("The new HTML;\n" + O);
*/
	
//	document.getElementById("output").text = "This is working this way";
	document.getElementById("OP").text = "This is working this way - via OP";



}