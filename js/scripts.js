
// SET VARIABLE HOLDERS
var jumboImage = document.getElementById('jumbotronImage').firstElementChild;
var imageElements = document.getElementsByClassName('item');
imageElements = Array.from(imageElements);
var imageList = [];

var imgholder;

jumboImage.src = imageElements[0].firstElementChild.firstElementChild.src;

// IMAGES THAT ARE BEING SHOWN HAVE AN .active CLASS ATTACHED
// ADD ACITVE ELEMENTS TO ARRAY
for(let i = 0; i < 10; i++) {
	if(imageElements[i].classList.contains('active') ) {
		imageList.push(imageElements[i]);
	}
}

// ON PAGE LOAD ONLY THE FIRST 10 .item ELEMENTS WILL BE SHOWN
// HIDE FOR ALL ELEMENTS BEYOND THE 10TH ITEM ELEMENT
for(let i = 10; i < imageElements.length; i++) {
	imageElements[i].classList.add('hidden');
}

// FOR EACH OF THE div.item ELEMENTS, ADD A CLICK FUNCTION
imageElements.forEach(function(el) {
	//el.addEventListener();
	el.firstElementChild.firstElementChild.addEventListener('click', function() {
		imgholder = this; //.parentElement.parentElement;
		
		
		console.log(imgholder);
		console.log(imgholder.parentElement.parentElement);
		
		imageIndex = imageList.indexOf(imgholder.parentElement.parentElement);
		console.log(imageIndex);
		
		
		
		jumboImage.src = this.src;
	})
})


// TESTS FOR THE CONSOLE
console.log(jumboImage);
console.log(imageList);
console.log(imageElements);
console.log(imgholder);


// BUTTON ELEMENTS TO LOAD AND HIDE DIV.ITEM ELEMENTS
var loadMoreImages = document.getElementById('load');
var hideSomeImages = document.getElementById('hide');

// LOAD MORE IMAGES TO THE SCREEN BUTTON
loadMoreImages.addEventListener('click', function() {
	document.getElementById('hide').classList.remove('hidden');
	
	var activeImagesLength = imageList.length;
	console.log(activeImagesLength);
	
	for(var i = activeImagesLength;
		i < activeImagesLength + 10; 
		i++) {
		
		if( i >= imageElements.length ) {
			break;
		}
		
		imageElements[i].classList.remove('hidden');
		imageElements[i].classList.add('active');
		imageList.push(imageElements[i]);
	}
	
	hideShowLoad();
	
		console.log(imageList.length);
})


// HIDE IMAGES FROM THE SCREEN BUTTON
hideSomeImages.addEventListener('click', function() {
	
	var activeImagesLength = imageList.length;
	console.log(activeImagesLength);
	
	if(activeImagesLength % 10 === 0) {
		var i = activeImagesLength - 1;
		var j = 10;
		console.log('line71');
	} else {
		var i = activeImagesLength - 1;
		var j = activeImagesLength % 10;
		console.log('line75');
	}
	
	for( i;
		 i >= activeImagesLength - j; 
		 i -= 1 ) {
		console.log('line81');
		imageElements[i].classList.add('hidden');
		imageElements[i].classList.remove('active');
		imageList.pop();
	}
	
	if( imageList.length > 10 ) {
		hideSomeImages.classList.remove('hidden');
		console.log('line89');
	} else {
		hideSomeImages.classList.add('hidden');
		console.log('line92');
	}
	
	hideShowLoad();
	
	console.log(imageList.length);
})


function hideShowLoad() {
	if( imageList.length === imageElements.length ) {
		loadMoreImages.classList.add('hidden');
		console.log('line89');
	} else {
		loadMoreImages.classList.remove('hidden');
		console.log('line92');
	}
}


var previousImage = document.getElementById('prev');
var nextImage = document.getElementById('next');
var imageIndex = 0;

previousImage.addEventListener('click', function() {
	imageIndex--;
	
	if( imageIndex < 0 ) {
		imageIndex = imageList.length - 1; //imageElements
	}
	
	if(imgholder) {
		//jumboImage.src = imgholder.previousElementSibling.firstElementChild.firstElementChild.src;
		
		jumboImage.src = imageList[imageIndex].firstElementChild.firstElementChild.src;
		
//		var imgParent = imgholder.parentNode.parentElement;
//		console.log(imgParent);
//		imageIndex = imageList.indexOf(imgholder.parent.parent);
//		console.log(imageIndex);
		
		imgholder = '';
	} else {
		//imageIndex--;
		jumboImage.src = imageList[imageIndex].firstElementChild.firstElementChild.src; //imageElements
	}
})

nextImage.addEventListener('click', function() {
	imageIndex++;
	console.log(imageIndex);
	
	if( imageIndex >= imageList.length ) { //imageElements
		imageIndex = 0;
	}
	
	if(imgholder) {
		//jumboImage.src = imgholder.nextElementSibling.firstElementChild.firstElementChild.src;
		
		jumboImage.src = imageList[imageIndex].firstElementChild.firstElementChild.src;
		
//		var imgParent = imgholder.parentNode.parentElement;
//		console.log(imgParent);
//		imageIndex = imageList.indexOf(imgholder);
//		console.log(imageIndex);
			
		imgholder = '';
	} else {
		//imageIndex++;
		jumboImage.src = imageList[imageIndex].firstElementChild.firstElementChild.src; //imageElements
	}
})





/*
when image is clicked and shown in jumbotron, imgholder = this image 
imageIndex should equal this image parents node, parents node index of imageList
*/