/* Written by Michael Grana */

//Array to store image names
var images = [];

/*Array push. Puts the last push you make at the end of the array
Ex. images = ["image1", "image2"]
images.push("image3");
	images = ["image1", "image2", "image3"]
*/

/*4 images, you can add more at the bottom, I named all my images in this style for ease
 Changing the order of the images in the push process will conflict with the functions written.
 Always add your newer images at the bottom.*/
 
images.push("image1.jpg"); //Oldest
images.push("image2.jpg");
images.push("image3.jpg");
images.push("image4.jpg"); //Newest
//add new pushes here


//Directory of images
var imageDirectory = "images/";

/*Functions*/

/*Newest images to oldest images functions*/
/*Use these functions to show newer pictures first*/

var imagePosition = images.length - 1;

//First image to appear on page
function loadNewestImg(){
	//Load image into document as first image, set in <body>
	document.getElementById("showImages").src = imageDirectory + images[imagePosition];
}

//Load the next image, from newer to older
function nextNewestImg(){
	if (!imagePosition == 0){
		imagePosition = imagePosition - 1;
		document.getElementById("showImages").src = imageDirectory + images[imagePosition];
	}
	else{
		//Do Nothing
	}
}

//Load the last image seen
function previousNewestImg(){
	if (imagePosition == images.length - 1){
		//Do Nothing
	}
	else{
		imagePosition = imagePosition + 1;
		document.getElementById("showImages").src = imageDirectory + images[imagePosition];
	}
}

/*Oldest images to newest images functions*/
/*Use these functions to show older pictures first*/

var imagePosition = 0;

//Load image into document as first image, set in <body>
function loadOldestImg(){
	document.getElementById("showImages").src = imageDirectory + images[imagePosition];
}

//Load the next image, oldest to newer
function nextOldestImg(){
	if (imagePosition == images.length - 1){
		//Do Nothing
	}
	else{
		imagePosition = imagePosition + 1;
		document.getElementById("showImages").src = imageDirectory + images[imagePosition];
	}
}

function previousOldestImg(){
	if (!imagePosition == 0){
		imagePosition = imagePosition - 1;
		document.getElementById("showImages").src = imageDirectory + images[imagePosition];
	}
	else{
		//Do Nothing
	}
}