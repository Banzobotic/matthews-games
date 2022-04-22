
//these functions display the div for each page
function home(){
	closeAll();
	document.getElementById("homePage").style.display = "block";
}
function about(){
	closeAll();
	aboutPageStuff();
	document.getElementById("aboutPage").style.display = "block";
}
function play(){
	closeAll();
	document.getElementById("playPage").style.display = "block";	
}
function EP(){
	closeAll();	
	document.getElementById("expandation").style.display = "block";
}
function high(){
	closeAll();
	loadHighScores();
	document.getElementById("highscore").style.display = "block";	
}
function EL(){
	closeAll();
	document.getElementById("externalLinks").style.display = "block";	
}
function CD(){
	closeAll();
	document.getElementById("codePages").style.display = "block";	
}
function FB(){
	closeAll();
	document.getElementById("feedback_TCS").style.display = "block";		
}
function login(){
	closeAll();
	document.getElementById("login").style.display = "block";		
}
function php(){
	closeAll();
	document.getElementById("pHp").style.display = "block";	
}
function r(MSG){
	closeAll();
	document.getElementById("messages").style.display = "block";
	document.getElementById("ms").innerHTML = MSG;
	
}
function TimerC(){
	closeAll();
	document.getElementById("countDown").style.display = "block";	
	
}



function closeAll(){
	document.getElementById("homePage").style.display = "none";
	document.getElementById("aboutPage").style.display = "none";
	document.getElementById("playPage").style.display = "none";
	document.getElementById("expandation").style.display = "none";
	document.getElementById("highscore").style.display = "none";
	document.getElementById("codePages").style.display = "none";
	document.getElementById("externalLinks").style.display = "none";
	document.getElementById("feedback_TCS").style.display = "none";	
	document.getElementById("login").style.display = "none";
	document.getElementById("pHp").style.display = "none";	
	document.getElementById("messages").style.display = "none";	
	document.getElementById("countDown").style.display = "none";		
	closeDD();
	
}


//this function does all the stuff to do with the high scores
function loadHighScores(){
	
	//document.getElementsByClassName("scoreChangers").style.display="none";

	//if the impossible mode has a value of undefind, set it to 0
	var x = localStorage.getItem("highscore7");
	if (x=="undefined"){
		x ==0;	
	}
	document.getElementById("ImpH").innerHTML = x;
	
	//set each container to the current highscore from saved place
	document.getElementById("EhardH").innerHTML = localStorage.getItem("highscore5");
	document.getElementById("VhardH").innerHTML = localStorage.getItem("highscore4");
	document.getElementById("HardH").innerHTML = localStorage.getItem("highscore3");
	document.getElementById("medH").innerHTML = localStorage.getItem("highscore2");
	document.getElementById("easyH").innerHTML = localStorage.getItem("highscore1");
	document.getElementById("begH").innerHTML = localStorage.getItem("highscore0");

	document.getElementById("EhardHn").innerHTML = localStorage.getItem("HSname5");
	document.getElementById("VhardHn").innerHTML = localStorage.getItem("HSname4");
	document.getElementById("hardHn").innerHTML = localStorage.getItem("HSname3");
	document.getElementById("medHn").innerHTML = localStorage.getItem("HSname2");
	document.getElementById("easyHn").innerHTML = localStorage.getItem("HSname1");
	document.getElementById("begHn").innerHTML = localStorage.getItem("HSname0");	
 	
	
	document.getElementById("pacManHS").innerHTML = localStorage.getItem("highscorePacMan");
	document.getElementById("MSHS").innerHTML = localStorage.getItem("highscoreMines");
	document.getElementById("tetrisHS").innerHTML = localStorage.getItem("TetrisHighscore");
	document.getElementById("snakeHS").innerHTML = localStorage.getItem("snakeHS");


	/*
		depending on the current user, load suitble buttons to edit the values
		
		perhaps make it all input boxes - but clear all the styling
	*/

	
	//the following section shows teh buttons to the the signed in user
	hidescoreChangers();
	if(current_user == "name_dot"){
		//Flappy Names
		document.getElementById("vhScoreNameC").style.display = "block";
		document.getElementById("hardScoreNameC").style.display = "block";
		document.getElementById("ehScoreNameC").style.display = "block";
		document.getElementById("medScoreNameC").style.display = "block";
		document.getElementById("easyScoreNameC").style.display = "block";
		document.getElementById("begScoreNameC").style.display = "block";
		
	}else if(current_user == "value_dot"){
		//flappy Score
		document.getElementById("ehScoreC").style.display = "block";
		document.getElementById("vhScoreC").style.display = "block";
		document.getElementById("hardScoreC").style.display = "block";
		document.getElementById("medScoreC").style.display = "block";
		document.getElementById("easyScoreC").style.display = "block";
		document.getElementById("begScoreC").style.display = "block";
		
	}else if(current_user == "all_dot"){
		//flappy all
		document.getElementById("ehScoreC").style.display = "block";
		document.getElementById("vhScoreC").style.display = "block";
		document.getElementById("hardScoreC").style.display = "block";
		document.getElementById("medScoreC").style.display = "block";
		document.getElementById("easyScoreC").style.display = "block";
		document.getElementById("begScoreC").style.display = "block";
		
		document.getElementById("vhScoreNameC").style.display = "block";
		document.getElementById("hardScoreNameC").style.display = "block";
		document.getElementById("ehScoreNameC").style.display = "block";
		document.getElementById("medScoreNameC").style.display = "block";
		document.getElementById("easyScoreNameC").style.display = "block";
		document.getElementById("begScoreNameC").style.display = "block";
		
	}else if(current_user == "otherGamer"){
		//other games
		document.getElementById("DMSCB").style.display =  "block";
		document.getElementById("MSPSCB").style.display = "block";
		document.getElementById("TTSSCB").style.display = "block";
		document.getElementById("SKSCB").style.display = "block";
		
	}else if(current_user == "admin_root"){
		//everything
		document.getElementById("DMSCB").style.display =  "block";
		document.getElementById("MSPSCB").style.display = "block";
		document.getElementById("TTSSCB").style.display = "block";
		document.getElementById("SKSCB").style.display = "block";
		
		document.getElementById("ehScoreC").style.display = "block";
		document.getElementById("vhScoreC").style.display = "block";
		document.getElementById("hardScoreC").style.display = "block";
		document.getElementById("medScoreC").style.display = "block";
		document.getElementById("easyScoreC").style.display = "block";
		document.getElementById("begScoreC").style.display = "block";
		
		document.getElementById("vhScoreNameC").style.display = "block";
		document.getElementById("hardScoreNameC").style.display = "block";
		document.getElementById("ehScoreNameC").style.display = "block";
		document.getElementById("medScoreNameC").style.display = "block";
		document.getElementById("easyScoreNameC").style.display = "block";
		document.getElementById("begScoreNameC").style.display = "block";
		
		document.getElementById("clearAll").style.display = "block";
	}else if(current_user == ""){

	}
	
}

//this hides all the buttons
function hidescoreChangers(){

	document.getElementById("clearAll").style.display = "none";
	
	document.getElementById("DMSCB").style.display = "none";
	document.getElementById("MSPSCB").style.display = "none";
	document.getElementById("TTSSCB").style.display = "none";
	document.getElementById("SKSCB").style.display = "none";	

	document.getElementById("ehScoreC").style.display = "none";
	document.getElementById("vhScoreC").style.display = "none";
	document.getElementById("hardScoreC").style.display = "none";
	document.getElementById("medScoreC").style.display = "none";
	document.getElementById("easyScoreC").style.display = "none";
	document.getElementById("begScoreC").style.display = "none";
	
	document.getElementById("vhScoreNameC").style.display = "none";
	document.getElementById("hardScoreNameC").style.display = "none";
	document.getElementById("ehScoreNameC").style.display = "none";
	document.getElementById("medScoreNameC").style.display = "none";
	document.getElementById("easyScoreNameC").style.display = "none";
	document.getElementById("begScoreNameC").style.display = "none";
	
}

function clearAll(){
	
	localStorage.setItem("highscore5",0);
	localStorage.setItem("highscore4",0);
	localStorage.setItem("highscore3",0);
	localStorage.setItem("highscore2",0);
	localStorage.setItem("highscore1",0);
	localStorage.setItem("highscore0",0);
	
	localStorage.setItem("HSname5","RESET");
	localStorage.setItem("HSname4","RESET");
	localStorage.setItem("HSname3","RESET");
	localStorage.setItem("HSname2","RESET");
	localStorage.setItem("HSname1","RESET");
	localStorage.setItem("HSname0","RESET");
	
	localStorage.setItem("highscorePacMan",0);
	localStorage.setItem("highscoreMines",0);
	localStorage.setItem("TetrisHighscore",0);
	localStorage.setItem("snakeHS",0);
	
	console.log("Resetting All Highscores");
	
	document.getElementById("EhardH").innerHTML = localStorage.getItem("highscore5");
	document.getElementById("VhardH").innerHTML = localStorage.getItem("highscore4");
	document.getElementById("HardH").innerHTML = localStorage.getItem("highscore3");
	document.getElementById("medH").innerHTML = localStorage.getItem("highscore2");
	document.getElementById("easyH").innerHTML = localStorage.getItem("highscore1");
	document.getElementById("begH").innerHTML = localStorage.getItem("highscore0");

	document.getElementById("EhardHn").innerHTML = localStorage.getItem("HSname5");
	document.getElementById("VhardHn").innerHTML = localStorage.getItem("HSname4");
	document.getElementById("hardHn").innerHTML = localStorage.getItem("HSname3");
	document.getElementById("medHn").innerHTML = localStorage.getItem("HSname2");
	document.getElementById("easyHn").innerHTML = localStorage.getItem("HSname1");
	document.getElementById("begHn").innerHTML = localStorage.getItem("HSname0");	
 	
	document.getElementById("snakeHS").style.display = localStorage.getItem("snakeHS");	
	document.getElementById("pacManHS").innerHTML = localStorage.getItem("highscorePacMan");
	document.getElementById("MSHS").innerHTML = localStorage.getItem("highscoreMines");
	document.getElementById("tetrisHS").innerHTML = localStorage.getItem("TetrisHighscore");
}


//these is the fucntions to change divs for the play page and show the relevent game
function notSo(){
	play();
	document.getElementById("not-so-play").style.display = "block";
	document.getElementById("wack-a-play").style.display = "none";
	document.getElementById("game2").style.display = "none";
	document.getElementById("minesweeper").style.display = "none";
	document.getElementById("123").style.display = "none";
	document.getElementById("tetris").style.display = "none";
	document.getElementById("snake").style.display = "none";
	document.getElementById("wordle").style.display = "none";	
}
function WackA(){
	play();
	document.getElementById("not-so-play").style.display = "none";
	document.getElementById("wack-a-play").style.display = "block";
	document.getElementById("game2").style.display = "none";
	document.getElementById("minesweeper").style.display = "none";
	document.getElementById("123").style.display = "none";
	document.getElementById("tetris").style.display = "none";
	document.getElementById("snake").style.display = "none";
	document.getElementById("wordle").style.display = "none";	
}
function DM(){
	play();
	document.getElementById("not-so-play").style.display = "none";
	document.getElementById("wack-a-play").style.display = "none";
	document.getElementById("game2").style.display = "block";
	document.getElementById("minesweeper").style.display = "none";
	document.getElementById("123").style.display = "none";
	document.getElementById("tetris").style.display = "none";
	document.getElementById("snake").style.display = "none";
	document.getElementById("wordle").style.display = "none";	
}
function MS(){
	play();
	document.getElementById("not-so-play").style.display = "none";
	document.getElementById("wack-a-play").style.display = "none";
	document.getElementById("game2").style.display = "none";
	document.getElementById("minesweeper").style.display = "block";
	document.getElementById("tetris").style.display = "none";
	document.getElementById("snake").style.display = "none";
	document.getElementById("wordle").style.display = "none";
}
function TT(){
	play();
	document.getElementById("not-so-play").style.display = "none";
	document.getElementById("wack-a-play").style.display = "none";
	document.getElementById("game2").style.display = "none";
	document.getElementById("minesweeper").style.display = "none";
	document.getElementById("tetris").style.display = "block";
	document.getElementById("snake").style.display = "none";
	document.getElementById("wordle").style.display = "none";
}
function SK(){
	play();
	document.getElementById("not-so-play").style.display = "none";
	document.getElementById("wack-a-play").style.display = "none";
	document.getElementById("game2").style.display = "none";
	document.getElementById("minesweeper").style.display = "none";
	document.getElementById("tetris").style.display = "none";
	document.getElementById("snake").style.display = "block";
	document.getElementById("wordle").style.display = "none";
}
function WD(){
	play();
	document.getElementById("not-so-play").style.display = "none";
	document.getElementById("wack-a-play").style.display = "none";
	document.getElementById("game2").style.display = "none";
	document.getElementById("minesweeper").style.display = "none";
	document.getElementById("tetris").style.display = "none";
	document.getElementById("snake").style.display = "none";
	document.getElementById("wordle").style.display = "block";	
	
}

function L(){
	window.open("https://www.dynamicmaths.co.uk/QuestionBank/index2.php?levelQ=1&otherlevels%5B%5D=15&otherlevels%5B%5D=2&how=A");
	
}


//the external links page, this make the object change styling when you hover over it
//	thinking about it, i could have done something in the CSS...
function ELC(id){
//stands for external links changer
		//reading null again
	//alert("sis working with id: " +id);
	document.getElementById(id).style.backgroundColor = "#e1e1e1";
//	document.getElementById(id).style.borderTop = "3px solid #000000";
	//make the border more defined


	
}
function ELU(id){
	document.getElementById(id).style.borderBottom = "none";
	document.getElementById(id).style.borderTop = "none";
	document.getElementById(id).style.backgroundColor = "#ffffff";

}

//A random function that makes use of the prompt function....
function useless_one(){
	var name = prompt("Please enter your name", "Harry Potter");
	var	age = prompt("Please enter your age","0");
	var address = prompt("Please Enter you Address\n", "123 Fake Street\nBobland\nFA12 KE3");
	var email = prompt("Please enter your email", "name.extra@emailProvider");
	var telNo = prompt("Please enter your Phone Number","000000000");
	var bankNo = prompt("Do not ask why,\nJust enter your BANK DETAILS");
	
	var output = "NAME: " + name + "\nAGE: " + age + "\nADDRESS: " + address + "\nEMAIL: " + email + "\nPHONE: " + telNo + "\nBank Details: " + bankNo;

}

//a function that was meant to detect if you are using edge
function edge(){
	
	var user = detect.parse(navigator.userAgent);
    for (brand_version_pair of navigator.userAgentData.brands) {
        if (brand_version_pair.brand == "Chromium"){
            return true;
        }
    }
    return false;

}


//what to do if the window has been resized.
function resize(){
	//this fnction is run on each load
	var isChromium = window.chrome;
	var winNav = window.navigator;
	var vendorName = winNav.vendor;
	var isOpera = typeof window.opr !== "undefined";
	var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
	var isIOSChrome = winNav.userAgent.match("CriOS");

	//detect if it is edge, chrome or other
	if (isIOSChrome) {
	   // is Google Chrome on IOS
	}else if(
	  isChromium !== null &&
	  typeof isChromium !== "undefined" &&
	  vendorName === "Google Inc." &&
	  isOpera === false &&
	  isIEedge === false
	){
	   // is Google Chrome
		browser = "Chrome";
		document.getElementById("edgeMessage").style.display = "none";
	} else { 
	   // not Google Chrome 
		if(/Edg/.test(navigator.userAgent)==true){
			
			var msg = createRmsg();
			document.getElementById("edgeMessage").innerHTML = msg;
			alert("WHY ARE YOU USING EDGE?\n\n");
			browser = "edge";

		}else{
			alert("I suppose another browser is ok,\nbut still I would recomend google Chrome\n\n");
			browser = "other"
			document.getElementById("edgeMessage").style.display = "none";
		}
	}		
	

	var W = window.innerWidth;
	var H = window.innerHeight;

	/*
	if window is less than a certain number of pixels, 
	change to other screen / reset sizes
	*/
	
	if(W < 1100){
		//alert("Less than 700");
		document.getElementById("largeTopNav").style.display="none";
		document.getElementById("navSmall").style.display="block";
		document.getElementById("SDDC").style.display="none";	
	
		document.getElementById("MC").style.marginLeft = "1rem";
		document.getElementById("MC").style.marginRight ="1rem";
		document.getElementById("MC").style.width = "95%";
		
		document.getElementById("header").style.marginLeft = "1rem";
		document.getElementById("header").style.marginRight ="1rem";
		document.getElementById("header").style.width = "95%";

		document.getElementById("logo").style.display ="none";
		
		
		//document.getElementByClass("mainContent").style.marginLeft = "1rem";
		//document.getElementByClass("mainContent").style.marginRight = "1rem";				
		DDE = true;
		
	}else{
		//alert("Greater than 700");
		document.getElementById("largeTopNav").style.display="block";
		document.getElementById("navSmall").style.display="none";
		document.getElementById("SDDC").style.display="none";
		
		document.getElementById("MC").style.marginLeft = "auto";
		document.getElementById("MC").style.marginRight ="auto";
		document.getElementById("MC").style.width = "55rem";
		
		
		document.getElementById("header").style.marginLeft = "auto";
		document.getElementById("header").style.marginRight ="auto";
		document.getElementById("header").style.width = "55rem";
		
		document.getElementById("logo").style.display ="block";
		//document.getElementByClass("mainContent").style.marginRight ="auto";		
	//	document.getElementByClass("mainContent").style.marginLeft = "auto";		
	//	document.getElementByClass("mainContent").style.marginRight = "auto";				
		DDE = false;
		
	}
	AdsAGo();
}

function createRmsg(){
	
	var list = [];
	list[0] = "<br><h1>WHY ARE YOU USING EDGE?</h1><br><h2>EDGE IS BAD !</h2>";
	list[1] = "<br><h1>EDGE IS BAD!</H1>";
	list[2] = "<br><h3>You must be Crazy...</h3><br><br><h1><b>Y O U   A R E   U S I N G   E D G E !</b></h1>";
	list[3] = "<br><p>What is the worst browser out there?... <br>is it safari? no.<br> is it firefox? no.<br><h1>IT IS EDGE!!</h1><br>";
	list[4] = "<br>are you wondering why nothin works?<br><h2>Don`t use EDGE!</h2>";
	list[5] = "<br><h1>Sorry, we do not support Edge</h1><br><p>We go out of our way to ensure that it is not confortable for you<p>";
	var len = list.length;
	var R = Math.floor(Math.random() * len);
	return list[R] + "<br><br><a href='https://www.google.co.uk/chrome/'><button class='ECB'><b>Click to install chrome</b></button></a><br><br><br><br><br><br><br>";

}


var dropDownOpen = false;
var DDE = true;
var browser = "";

/*Drop down nav bar related*/{

function hgft(){
//doesn't stand for anything
//	alert("ello ello\n" + DDE + "\n" + dropDownOpen);
	if(DDE == true){
	
		if(dropDownOpen == true){
			document.getElementById("SDDC").style.display = "none";
			document.getElementById("downIcon").style.display = "none";
			document.getElementById("leftIcon").style.display = "inline";
			dropDownOpen = false;
			
		}else{
			document.getElementById("SDDC").style.display = "block";
			document.getElementById("downIcon").style.display = "inline";
			document.getElementById("leftIcon").style.display = "none";
			dropDownOpen = true;		
		}

	}

}

function closeDD(){
	dropDownOpen = false;
	document.getElementById("SDDC").style.display = "none";
	document.getElementById("downIcon").style.display = "none";
	document.getElementById("leftIcon").style.display = "inline";
}

}

//from W3 schools - for codeDescription page

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();


//cannot remeber what this does, if anything....., but is from w3 schools
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var current_user = "other";
var users = [];
{
	
	users[0] = ["other",""]
	users[1] = ["admin_Root","334159"];
	users[2] = ["name_dot","158789"];
	users[3] = ["value_dot","158894"];
	users[4] = ["all_dot","156470"];
	users[5] = ["otherGamer","156414"];
	users[6] = ["admin_root","156894"];

}

/*This bit is for the admin login stuff*/{


function setNewuser(){
	console.log("Setting new user...");
	//get info from form
	let  Qusername= document.forms["LIF"]["user"].value;
	let  Qpassword= document.forms["LIF"]["password"].value;

	var gotUser = false;
	
	if(users[C][6] == Qusername && users[C][6] == Qpassword){
		console.log("A smart guy eh?...\n\nWell, thats no longer the password!");
		FOPMSG("Sorry, That account is no longer acepted");		
	}else{
		for(var C = 1; C < users.length;C++){
			if(users[C][0] == Qusername){
				gotUser = true;
				if(users[C][1] == Qpassword){
					//log in
					current_user = users[C][0];
					high();
					console.log("Welcome valid user");
				}else{
					//incorrect password
					console.log("incoorect password...\n\nAre you really a valid user?");
					FOPMSG("Sorry, Incorrect Password");
				}
			}
		}
	
		if(gotUser == false){
			//sorry, you are no a user
			console.log("That is not a user name...");
			FOPMSG("Unknown User<br><br>We are unable to create new users");
		}
	}
}


function FOPMSG(mg){
	document.getElementById("formOutput").innerHTML = "<i style='color:red'>" + mg + "</i>";
}
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

var countDownDate = new Date("Apr 22, 2022 10:49:45").getTime();
	//countDownDate = new Date("May 06, 2022 09:00:00").getTime();
/*For Count Down timer - if you can find it*/{

// Set the date we're counting down to

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
		var NCDD = new Date("May 06, 2022 09:00:00").getTime();
		document.getElementById("cdmww").innerHTML = "Time left Until the exam...";
	   var D = countDownDate - now;

	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(D / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((D % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((D % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((D % (1000 * 60)) / 1000);

	  // Display the result in the element with id="demo"
	  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
	  + minutes + "m " + seconds + "s ";
	if(D<0){
		clearInterval(x);
		document.getElementById("timer").innerHTML = "GOODBYE MISS MILLER";
	}
  }
}, 1000);

function aboutPageStuff(){
	var now = new Date().getTime();
    var distance = countDownDate - now;
	if(distance < 0){
		//show 'hidden' stuff
		document.getElementById("acknowledgements").style.display="block";
	}else{
		//hide them#
		document.getElementById("acknowledgements").style.display="none";
	}
}

}


/*For [external links] adverts*/{

function AdsAGo(){
	
	if(showingAdvert==true){
		//wait a bit longer
	}else{
		//pick a new advert
		var R = Math.floor(Math.random() * numberOfAds)+1;
		ShowAd(R);
	}
	setTimeout(AdsAGo,1000);
}

function ShowAd(AdNo){
	for(var C = 1;C<numberOfAds+1;C++){
		var x = "ad".concat(parseInt(C));
		document.getElementById(x).style.display="none";
	}
	CAD = AdNo;
	document.getElementById("ad".concat(parseInt(AdNo))).style.right = positionStage;
	setTimeout(moveIn,1);
}

function moveIn(){
	if(positionStage ==0){

	}else{
		//if not at rest position, keep moving 
		positionStage = positionStage + 1;
		document.getElementById("ad".concat(parseInt(CAD))).style.right = positionStage;
		setTimeout(moveIn,1);
	}

}


}

var fadeInterval = 100;
var showingAdvert = false;
var advertShowTime = 15000;
var numberOfAds = 1;
var positionStage = -100;//the start value
var CAD = 0;

/*Cookies Stuff

	have a cookie to see if you have been here before or not.
	have anotehr to see if you have given feedback - or click on it



*/

function cookies(){
	
	if(checkCookie() == true){
		//show the box saying youve been here before
			//but have another cookie 
		
	}else{
		//set the cookie saying that you have been here before
		
		
	}
	
	
}

//from W3 Schools - I was looking for inspration, but they basically covered it

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
/*
	return true if a cookie is found

*/
  let user = getCookie("username");
  if (user != "") {
	  
    alert("Welcome again " + user);//change this
	
  } else {
	  
	  
    user = prompt("Please enter your name:", "");//change this
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
	
	
  }
}


