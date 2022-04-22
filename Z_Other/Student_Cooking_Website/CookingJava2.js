//for survey form

function validateForm(){

var firstN = document.forms["SurveyForm"]["firstName"].value;

if (firstN===null || firstN==="")
{
	alert("Firstname field must be filled out");
	return false;
}
else
{
	var FN = "true";
}

var Sname = document.forms["SurveyForm"]["surname"].value;

if (Sname===null || Sname==="")
{
	alert("Surname field must be filled out");
	return false;
}
else
{
	var SN = "true";
}

var SD = document.forms["SurveyForm"]["CanHold"].value;

//errors occur from here

if (SD==="No"|| SD===null || SD==="")
{
	alert("Please confirm we can store your data");
	return false;
}

//most often after here
if (SN==="true" && FN==="true" && SD==="Yes");
{


	//does not keep switch on to the correct one. quickly reverts back
	document.getElementById("SWTHE").style.display="none";
	
	alert("2");

	//pause(100);
	//pause("100");
	//sleep(10000)
	//sleep("10000");

	document.getElementById("surveyDone").style.display="block";

//window.open("surveyCompleted.html");
//location.href = "surveyCompleted.html";
//window.open("surveyCompleted.html");
//window.location.href = "surveyCompleted.html";
}
}