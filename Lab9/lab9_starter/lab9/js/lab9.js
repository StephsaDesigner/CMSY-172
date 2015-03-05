/*
  CMSY 172 - lab9.js - Events & event handling
  
  Event handler functions:
    - init 
        Used to set the onclick event for the image element.
      
    - toggleImages
        Toggles the image between blurred and cleared each
        time the image element is clicked.  This is accomplished
        by changing the image elements source file when the click
        event occurs.
        
    The following JavaScript events and methods are required:
      - Set the window.onload event to the init event handler function
      
      - Set the onclick event for the image to the toggleImages event handler function
      
      - The document.getElementById method to get the image element from the document.
        You will need to use this in both event handler functions.
          ==> The image id is clickimage
          
      - The string indexOf method to search the image.src property for blurred.  Use the result
        of the search to determine which source file the image.src property should be set to in 
        the toggleImages event handler function.
          ==> The two image source files are named: lab9_blurred.jpg, and lab9_clear.jpg


*/

//window.onload event handler function
function init(){
	var image = document.getElementById("clickimage");
	image.onclick = toggleImages;
}

//Click event handler function
function toggleImages(){
	var image = document.getElementById("clickimage");
	
	if (image.src.indexOf("blurred") !== -1)
		image.src = "./images/lab9_clear.jpg";
	else
		image.src = "./images/lab9_blurred.jpg";
	}

window.onload = init;

