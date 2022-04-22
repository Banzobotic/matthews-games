
//NOW DOWNLOADS A FILE TO YOUR COMPUTER WITH THE ENTIRE CODE FOR THE SECTION WITHIN IT!!!!

function showarea(){document.getElementById("outArea").style.display="block";}

function changeButton(ID){

	if(currentColour == "green"){
		ID.style.backgroundColor="#3EFA03";
		ID.innerHTML = "0";
	
	}else if(currentColour == "red"){
		ID.style.backgroundColor="#F54538";
		ID.innerHTML = "1";
		
	}else if(currentColour == "blue"){
		ID.style.backgroundColor="blue";
		ID.innerHTML = "2";
		
	}else if(currentColour == "pink"){
		ID.style.backgroundColor="#D23EFF";
		ID.innerHTML = "3";
	}

}

function refresh(){
	window.location.reload();	
}

function getText(ID){alert(ID);
	return ID.innerHTML;
}

function copy(ToCopy) {
	/*
	var W = document.getElementById("copyCode").innerHTML;
	navigator.clipboard.writeText(W);
	alert("Copied the text: " + W);*/
}


function printCode(){
	var x = document.forms["nameInput"]["name"].value;
	var y = document.forms["nameInput"]["number"].value;
	
	if (y<106){
		alert("Sorry, at the moment, the level number has to be greater than 73");
	}else{
	
		showarea();
		//in the form B_X20 = ["0","0","0","0","0","0","0","0"];
		
		var longString = "";
		
		//-- -- -- -- -- -- -- -- -- --- -- --- -- -- -- -- -- -- -- - - -- -- - -
		var out = "function update_20_for_R".concat(y.concat("(){"));
		document.getElementById("outCode_Title").innerHTML = out;	
		
		longString = longString.concat(out);
		
		if(x == ""||x==null){
		
		}else{
			out = "//This section was made by ".concat(x);
			document.getElementById("nameArea").innerHTML = out;
		}
		
		longString = longString.concat(out);
			
		for(var row = 1;row<21;row++){
			var begining = 'B_X[19] = ["';
				
			var two = begining.concat(document.getElementById("btn1".concat(row)).innerHTML);
			two = two.concat('","');
			two = two.concat(document.getElementById("btn2".concat(row)).innerHTML);
			two = two.concat('","');
			two = two.concat(document.getElementById("btn3".concat(row)).innerHTML);
			two = two.concat('","');
			two = two.concat(document.getElementById("btn4".concat(row)).innerHTML);
			two = two.concat('","');
			two = two.concat(document.getElementById("btn5".concat(row)).innerHTML);
			two = two.concat('","');
			two = two.concat(document.getElementById("btn6".concat(row)).innerHTML);
			two = two.concat('","');
			two = two.concat(document.getElementById("btn7".concat(row)).innerHTML);
			two = two.concat('","');
			two = two.concat(document.getElementById("btn8".concat(row)).innerHTML);	
			
			var ToPrint = two.concat('"];');	
			document.getElementById("outCode".concat(row)).innerHTML = ToPrint;
			longString = longString.concat(ToPrint);
		}

		var FileName = "codeFor_R".concat(y);
		var toSave = document.getElementById("copyCode").innerHTML;
		saveCode(toSave,FileName);
		
		}
}

function allnorm(){
	
	document.getElementById("SBn1").style.opacity="1";
	document.getElementById("SBn2").style.opacity="1";
	document.getElementById("SBn3").style.opacity="1";
	document.getElementById("SBn4").style.opacity="1";
}

function Sgreen(){
	if(on[0] == 0){
		currentColour = "green";
		allnorm();
		document.getElementById("SBn1").style.opacity="0.7";
		on[0] = 1;
	}else{
		currentColour = "green";
		document.getElementById("SBn1").style.opacity="1";
		on[0] = 0;
	}
}

function Sred(){
	if(on[1] == 0){
		currentColour = "red";
		allnorm();
		document.getElementById("SBn2").style.opacity="0.7";
		on[1] = 1;
	}else{
		currentColour = "green";
		document.getElementById("SBn2").style.opacity="1";
		on[1] = 0;
	}
}

function Sblue(){
	if(on[2] == 0){
		currentColour = "blue";
		allnorm();
		document.getElementById("SBn3").style.opacity="0.7";
		on[2] = 1;
	}else{
		currentColour = "green";
		document.getElementById("SBn3").style.opacity="1";
		on[2] = 0;
	}

}

function Spink(){
	if(on[3] == 0){
		currentColour = "pink";
		allnorm();
		document.getElementById("SBn4").style.opacity="0.7";
		on[3] = 1;
	}else{
		currentColour = "green";
		document.getElementById("SBn4").style.opacity="1";
		on[3] = 0;
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
 
function destroyClickedElement(event){
	document.body.removeChild(event.target);
}

function removeTags(str) {
	
	//thanks to GeeksForGeeks for this function
	//https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/
	
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}


var currentColour = "green";
var on = [0,0,0,0];
 
 
 
 
 
 