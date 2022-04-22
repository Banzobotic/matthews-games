var DTPA = "";
	
	
function produceCode(){
	
	var columns = document.getElementById("XValues").value;
	var rows = document.forms["inputForm"]["Yvalues"].value;
	var className = document.forms["inputForm"]["className"].value;
	var functionName = document.forms["inputForm"]["functionName"].value;

	var ID = "";
	var o  = "<table>";
	/*
		why does it times the number inputs by 10????!!!?!?!!!!	
		IT MAKE NOT SENSE.
		
		
		THEN, IT HAS DECISED THAT IT WILL NOT PRINT TO THE HTML PAGE  !   
	
	*/
	for(var LY = 1;LY < rows+1;LY++){
		//alert("running loop: " + LY);
		o = o.concat("<tr class='row" + LY +"'>");	

		for(var LX = 1;LX<columns+1;LX++){	
			alert(LY + " _ " + LX);
			ID = createID(LX,LY);
			//o = o.concat("<td class='" + className + "' onclick='" + functionName + "(" + ID +")' id='" + ID + "'></td>");	
			o = o.concat("<td class='");
			o = o.concat(className);
			o = o.concat("' onclick='");
			o = o.concat(functionName);
			o = o.concat("(");//from here it dislikes the length of the string
			o = o.concat(ID);
			o = o.concat(")' id='");
			o = o.concat(ID);
			o = o.concat("'></td>");			
		
		}		
		o = o.concat("</tr>");		
	}
//the length of the string is getting too long to store
	o = o.concat("</table>");
	DTPA = o;
	ChangeDiv(o);
	var fileName = "table_" + columns + "_wide_" + rows + "_high";	
	
}

function ChangeDiv(PrintThis){ document.getElementById("out").value = PrintThis;  }//cannot set properties of NULL

function createID(x,y){
	var ID = "btn".concat(x);
	ID = ID.concat("_");
	ID = ID.concat(y);
	
	return ID;
}
/*

function holderOfCode(){
		//alert("<html><h1>Hello there</h1><br><Br><P>is this a webpage?</p></html>");
	if (confirm("Press a button!")) {
		txt = "You pressed OK!";
		
		
		
		var columns = document.forms["inputForm"]["Xvalues"].value;
		var rows = document.forms["inputForm"]["Yvalues"].value;
		var className = document.forms["inputForm"]["className"].value;
		var functionName = document.forms["inputForm"]["functionName"].value;	
		var ID = "";
		var o  = "<table>";
		//in Form			btnX_Y
		//<td class="dot" onclick="(clicked(btn1_1))" id="btn1_1"></td>
		
		
		
		for(var LY = 1;LY < rows+1;LY++){
			alert("running loop: " + LY);
			
			for(var LX = 1;LX<columns+1;LX++){
			
				ID = createID(LX,LY);
				o = o.concat("<tr class='row" + LY +"'>");
				o = o.concat("<td class='" + className + "' onclick='" + functionName + "(" + ID +")' id='" + ID + "'></td>");		
				
				o = o.concat("</tr>");	
			}			
		}
	
		o = o.concat("</table>");
		
		document.getElementById("outArea").innerHTML = o;
		var fileName = "table_" + width + "_wide_" + height + "_high";
		saveCode(o,fileName);
		//alert("does activate functions");
	} else {
	  txt = "You pressed Cancel!";
	}
	
}



	



function saveCode(toSave,fileName){	
	
	
	var textToSave = removeTags(toSave);
	var fileNameToSaveAs = fileName;
	
	var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
	var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);

 
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	downloadLink.href = textToSaveAsURL;
	downloadLink.onclick = destroyClickedElement;
	downloadLink.style.display = "none";
	document.body.appendChild(downloadLink);
 
	downloadLink.click();
}
*/


