

/*for italian page*/

function ItalianImages1(thisImage){

	thisImage.style.height="170px";
	thisImage.style.width="170px";
	thisImage.style.marginLeft="5px";
	thisImage.style.marginRight="5px";
	
	thisImage.style.marginBottom="10px";

}

function ItalianImages2(thisImage){
	thisImage.style.height="140px";
	thisImage.style.width="140px";
	thisImage.style.marginLeft="20px";
	thisImage.style.marginRight="20px";



thisImage.style.marginBottom="40px";
}


/* for stir fry page*/
function PrawnstoCabbage(thisImage){
if (thisImage.src.match("../IMAGES/prawns.jpg"))
{
thisImage.src="../IMAGES/chineseCabbage.jpg";
}
else
{
thisImage.src="../IMAGES/prawns.jpg";
}
}

function Sauce(thisImage){
if (thisImage.src.match("../IMAGES/soySauce.jpg"))
{
thisImage.src="../IMAGES/oysterSauce.jpg";
}
else
{
thisImage.src="../IMAGES/soySauce.jpg";
}
}

function beanstoNoodles(thisImage){
if (thisImage.src.match("../IMAGES/greenBeans.jpg"))
{
thisImage.src="../IMAGES/noodles.jpg";
}
else
{
thisImage.src="../IMAGES/greenBeans.jpg";
}
}

/*for spices page*/
function chilliPowder1(thisImage){

document.getElementById("chili").style.display="block";
document.getElementById("cumin").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("Cinnamon").style.display="none";
document.getElementById("Cloves").style.display="none";
document.getElementById("Fenu").style.display="none";
document.getElementById("Cardamon").style.display="none";
document.getElementById("MustardSeeds").style.display="none";
document.getElementById("Nutmeg").style.display="none";

}

function cumin1(thisImage){

document.getElementById("chili").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("cumin").style.display="block";
document.getElementById("Cinnamon").style.display="none";
document.getElementById("Cloves").style.display="none";
document.getElementById("Fenu").style.display="none";
document.getElementById("Cardamon").style.display="none";
document.getElementById("MustardSeeds").style.display="none";
document.getElementById("Nutmeg").style.display="none";

}

function cinnamon1(thisImage){

document.getElementById("chili").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("Cinnamon").style.display="block";
document.getElementById("Cloves").style.display="none";
document.getElementById("Fenu").style.display="none";
document.getElementById("Cardamon").style.display="none";
document.getElementById("MustardSeeds").style.display="none";
document.getElementById("Nutmeg").style.display="none";

}

function cloves1(thisImage){

document.getElementById("chili").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("Cinnamon").style.display="none";
document.getElementById("Cloves").style.display="block";
document.getElementById("Fenu").style.display="none";
document.getElementById("Cardamon").style.display="none";
document.getElementById("MustardSeeds").style.display="none";
document.getElementById("Nutmeg").style.display="none";

}

function fenu1(thisImage){

document.getElementById("chili").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("Cinnamon").style.display="none";
document.getElementById("Cloves").style.display="none";
document.getElementById("Fenu").style.display="block";
document.getElementById("Cardamon").style.display="none";
document.getElementById("MustardSeeds").style.display="none";
document.getElementById("Nutmeg").style.display="none";

}

function cardamom1(thisImage){

document.getElementById("chili").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("Cinnamon").style.display="none";
document.getElementById("Cloves").style.display="none";
document.getElementById("Fenu").style.display="none";
document.getElementById("Cardamon").style.display="block";
document.getElementById("MustardSeeds").style.display="none";
document.getElementById("Nutmeg").style.display="none";

}

function mustard1(thisImage){

document.getElementById("chili").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("Cinnamon").style.display="none";
document.getElementById("Cloves").style.display="none";
document.getElementById("Fenu").style.display="none";
document.getElementById("Cardamon").style.display="none";
document.getElementById("MustardSeeds").style.display="block";
document.getElementById("Nutmeg").style.display="none";

}

function nutmeg1(thisImage){

document.getElementById("chili").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("cumin").style.display="none";
document.getElementById("Cinnamon").style.display="none";
document.getElementById("Cloves").style.display="none";
document.getElementById("Fenu").style.display="none";
document.getElementById("Cardamon").style.display="none";
document.getElementById("MustardSeeds").style.display="none";
document.getElementById("Nutmeg").style.display="block";

}


/*for pizza basics page*/
function displayPizza1(){
document.getElementById("pizza1Text").style.color="blue";

document.getElementById("pizza2Text").style.color="black";
document.getElementById("pizza3Text").style.color="black";
document.getElementById("pizza4Text").style.color="black";
document.getElementById("pizza5Text").style.color="black";
document.getElementById("pizza6Text").style.color="black";
document.getElementById("pizza7Text").style.color="black";
document.getElementById("pizza8Text").style.color="black";

document.getElementById("pizza1").style.display="block";

document.getElementById("pizza2").style.display="none";
document.getElementById("pizza3").style.display="none";
document.getElementById("pizza4").style.display="none";
document.getElementById("pizza5").style.display="none";
document.getElementById("pizza6").style.display="none";
document.getElementById("pizza7").style.display="none";
document.getElementById("pizza8").style.display="none";
}

function displayNone(){
document.getElementById("pizza1Text").style.color="black";
document.getElementById("pizza2Text").style.color="black";
document.getElementById("pizza3Text").style.color="black";
document.getElementById("pizza4Text").style.color="black";
document.getElementById("pizza5Text").style.color="black";
document.getElementById("pizza6Text").style.color="black";
document.getElementById("pizza7Text").style.color="black";
document.getElementById("pizza8Text").style.color="black";

document.getElementById("pizza1").style.display="none";
document.getElementById("pizza2").style.display="none";
document.getElementById("pizza3").style.display="none";
document.getElementById("pizza4").style.display="none";
document.getElementById("pizza5").style.display="none";
document.getElementById("pizza6").style.display="none";
document.getElementById("pizza7").style.display="none";
document.getElementById("pizza8").style.display="none";

}

function displayPizza2(){
document.getElementById("pizza2Text").style.color="blue";

document.getElementById("pizza1Text").style.color="black";
document.getElementById("pizza3Text").style.color="black";
document.getElementById("pizza4Text").style.color="black";
document.getElementById("pizza5Text").style.color="black";
document.getElementById("pizza6Text").style.color="black";
document.getElementById("pizza7Text").style.color="black";
document.getElementById("pizza8Text").style.color="black";

document.getElementById("pizza2").style.display="block";

document.getElementById("pizza1").style.display="none";
document.getElementById("pizza3").style.display="none";
document.getElementById("pizza4").style.display="none";
document.getElementById("pizza5").style.display="none";
document.getElementById("pizza6").style.display="none";
document.getElementById("pizza7").style.display="none";
document.getElementById("pizza8").style.display="none";
}

function displayPizza3(){
document.getElementById("pizza3Text").style.color="blue";

document.getElementById("pizza2Text").style.color="black";
document.getElementById("pizza1Text").style.color="black";
document.getElementById("pizza4Text").style.color="black";
document.getElementById("pizza5Text").style.color="black";
document.getElementById("pizza6Text").style.color="black";
document.getElementById("pizza7Text").style.color="black";
document.getElementById("pizza8Text").style.color="black";

document.getElementById("pizza3").style.display="block";

document.getElementById("pizza2").style.display="none";
document.getElementById("pizza1").style.display="none";
document.getElementById("pizza4").style.display="none";
document.getElementById("pizza5").style.display="none";
document.getElementById("pizza6").style.display="none";
document.getElementById("pizza7").style.display="none";
document.getElementById("pizza8").style.display="none";
}

function displayPizza4(){
document.getElementById("pizza4Text").style.color="blue";

document.getElementById("pizza2Text").style.color="black";
document.getElementById("pizza3Text").style.color="black";
document.getElementById("pizza1Text").style.color="black";
document.getElementById("pizza5Text").style.color="black";
document.getElementById("pizza6Text").style.color="black";
document.getElementById("pizza7Text").style.color="black";
document.getElementById("pizza8Text").style.color="black";

document.getElementById("pizza4").style.display="block";

document.getElementById("pizza2").style.display="none";
document.getElementById("pizza3").style.display="none";
document.getElementById("pizza1").style.display="none";
document.getElementById("pizza5").style.display="none";
document.getElementById("pizza6").style.display="none";
document.getElementById("pizza7").style.display="none";
document.getElementById("pizza8").style.display="none";
}
function displayPizza5(){
document.getElementById("pizza5Text").style.color="blue";

document.getElementById("pizza2Text").style.color="black";
document.getElementById("pizza3Text").style.color="black";
document.getElementById("pizza4Text").style.color="black";
document.getElementById("pizza1Text").style.color="black";
document.getElementById("pizza6Text").style.color="black";
document.getElementById("pizza7Text").style.color="black";
document.getElementById("pizza8Text").style.color="black";

document.getElementById("pizza5").style.display="block";

document.getElementById("pizza2").style.display="none";
document.getElementById("pizza3").style.display="none";
document.getElementById("pizza4").style.display="none";
document.getElementById("pizza1").style.display="none";
document.getElementById("pizza6").style.display="none";
document.getElementById("pizza7").style.display="none";
document.getElementById("pizza8").style.display="none";
}

function displayPizza6(){
document.getElementById("pizza6Text").style.color="blue";

document.getElementById("pizza2Text").style.color="black";
document.getElementById("pizza3Text").style.color="black";
document.getElementById("pizza4Text").style.color="black";
document.getElementById("pizza5Text").style.color="black";
document.getElementById("pizza1Text").style.color="black";
document.getElementById("pizza7Text").style.color="black";
document.getElementById("pizza8Text").style.color="black";

document.getElementById("pizza6").style.display="block";

document.getElementById("pizza2").style.display="none";
document.getElementById("pizza3").style.display="none";
document.getElementById("pizza4").style.display="none";
document.getElementById("pizza5").style.display="none";
document.getElementById("pizza1").style.display="none";
document.getElementById("pizza7").style.display="none";
document.getElementById("pizza8").style.display="none";
}

function displayPizza7(){
document.getElementById("pizza7Text").style.color="blue";

document.getElementById("pizza2Text").style.color="black";
document.getElementById("pizza3Text").style.color="black";
document.getElementById("pizza4Text").style.color="black";
document.getElementById("pizza5Text").style.color="black";
document.getElementById("pizza6Text").style.color="black";
document.getElementById("pizza1Text").style.color="black";
document.getElementById("pizza8Text").style.color="black";

document.getElementById("pizza7").style.display="block";

document.getElementById("pizza2").style.display="none";
document.getElementById("pizza3").style.display="none";
document.getElementById("pizza4").style.display="none";
document.getElementById("pizza5").style.display="none";
document.getElementById("pizza6").style.display="none";
document.getElementById("pizza1").style.display="none";
document.getElementById("pizza8").style.display="none";
}
function displayPizza8(){
document.getElementById("pizza8Text").style.color="blue";

document.getElementById("pizza2Text").style.color="black";
document.getElementById("pizza3Text").style.color="black";
document.getElementById("pizza4Text").style.color="black";
document.getElementById("pizza5Text").style.color="black";
document.getElementById("pizza6Text").style.color="black";
document.getElementById("pizza7Text").style.color="black";
document.getElementById("pizza1Text").style.color="black";

document.getElementById("pizza8").style.display="block";

document.getElementById("pizza2").style.display="none";
document.getElementById("pizza3").style.display="none";
document.getElementById("pizza4").style.display="none";
document.getElementById("pizza5").style.display="none";
document.getElementById("pizza6").style.display="none";
document.getElementById("pizza7").style.display="none";
document.getElementById("pizza1").style.display="none";
}

/*for Indian page*/

function indian1(thisImage){

if (thisImage.src.match("../IMAGES/indian1.jpg"))
{
thisImage.src="../IMAGES/indian3.jpg";
}
else
{
thisImage.src="../IMAGES/indian1.jpg";
}
}

function indian2(thisImage){

if (thisImage.src.match("../IMAGES/indian2.jpg"))
{
thisImage.src="../IMAGES/indian4.jpg";
}
else
{
thisImage.src="../IMAGES/indian2.jpg";
}
}

/*for three curries page*/
function chickenShow() {
document.getElementById("chicken").style.display="block";
document.getElementById("veg").style.display="none";
document.getElementById("lamb").style.display="none";
}
function hideALl(){
document.getElementById("chicken").style.display="none";
document.getElementById("veg").style.display="none";
document.getElementById("lamb").style.display="none";
}
function vegShow() {
document.getElementById("chicken").style.display="none";
document.getElementById("veg").style.display="block";
document.getElementById("lamb").style.display="none";
}
function lambShow() {
document.getElementById("chicken").style.display="none";
document.getElementById("veg").style.display="none";
document.getElementById("lamb").style.display="block";
}


// form validators. first one is for the survey form
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

if (SD==="No"|| SD===null || SD==="")
{
alert("Please confirm we can store your data");
return false;
}

if (SN==="true" && FN==="true" && SD==="Yes")
{
window.open("surveyCompleted.html");
//location.href = "surveyCompleted.html";
//window.open("surveyCompleted.html");
//window.location.href = "surveyCompleted.html";
}
}


// this function validates the chinese form
function ChineseFormValidate() {
	var Dtype = document.forms["ChineseForm"]["guidetype"].value;
	if (Dtype===null || Dtype==="")
	{
		alert("Please enter a type of document");
		return false;
	}
	else
	{
		if (Dtype==="Email" && Dtype !== "Paper")
		{	// !== means 'not equal to'
			//ensure that email field is fill out

			var EmailAd = document.forms["ChineseForm"]["Email"].value;
			if (EmailAd===null || EmailAd==="")
			{
				alert("Please enter an email address");
				return false;
			}
		}
		else
		{
			//ensure that the address field is filled out
			var Sname = document.forms["ChineseForm"]["Surname"].value;
			var St = document.forms["ChineseForm"]["Street"].value;
			var tn = document.forms["ChineseForm"]["town"].value;

			if (Sname===null || Sname==="" || St===null || St==="" || tn===null || tn==="")
			{
				alert("Please fill in your address correctly");
				return false;
			}
		}
		window.open("FormCompleted.html");
	}
	
}

