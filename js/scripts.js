
// SET VARIABLE HOLDERS
var jumboImage = document.getElementById('jumbotronImage').firstElementChild;
var imageElements = document.getElementsByClassName('item');
imageElements = Array.from(imageElements);
var previousImage = document.getElementById('prev');
var nextImage = document.getElementById('next');
var imageIndex = 0;
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
	el.firstElementChild.firstElementChild.addEventListener('click', function() {
		imgholder = this;

		imageIndex = imageList.indexOf(imgholder.parentElement.parentElement);

		jumboImage.src = this.src;
	})
})

// BUTTON ELEMENTS TO LOAD AND HIDE DIV.ITEM ELEMENTS
var loadMoreImages = document.getElementById('load');
var hideSomeImages = document.getElementById('hide');

// LOAD MORE IMAGES TO THE SCREEN BUTTON
loadMoreImages.addEventListener('click', function() {
	document.getElementById('hide').classList.remove('hidden');
	
	var activeImagesLength = imageList.length;
	
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
})

// HIDE IMAGES FROM THE SCREEN BUTTON
hideSomeImages.addEventListener('click', function() {
	var activeImagesLength = imageList.length;
	
	if(activeImagesLength % 10 === 0) {
		var i = activeImagesLength - 1;
		var j = 10;
	} else {
		var i = activeImagesLength - 1;
		var j = activeImagesLength % 10;
	}
	
	for( i;
		 i >= activeImagesLength - j; 
		 i -= 1 ) {
		imageElements[i].classList.add('hidden');
		imageElements[i].classList.remove('active');
		imageList.pop();
	}
	
	if( imageList.length > 10 ) {
		hideSomeImages.classList.remove('hidden');
	} else {
		hideSomeImages.classList.add('hidden');
	}
	
	hideShowLoad();
})


function hideShowLoad() {
	if( imageList.length === imageElements.length ) {
		loadMoreImages.classList.add('hidden');
	} else {
		loadMoreImages.classList.remove('hidden');
	}
}

previousImage.addEventListener('click', function() {
	imageIndex--;
	
	if( imageIndex < 0 ) {
		imageIndex = imageList.length - 1;
	}
	
	if(imgholder) {
		jumboImage.src = imageList[imageIndex].firstElementChild.firstElementChild.src;
		
		imgholder = '';
	} else {
		jumboImage.src = imageList[imageIndex].firstElementChild.firstElementChild.src;
	}
})

nextImage.addEventListener('click', function() {
	imageIndex++;
	
	if( imageIndex >= imageList.length ) {
		imageIndex = 0;
	}
	
	if(imgholder) {
		jumboImage.src = imageList[imageIndex].firstElementChild.firstElementChild.src;
		
		imgholder = '';
	} else {
		//imageIndex++;
		jumboImage.src = imageList[imageIndex].firstElementChild.firstElementChild.src;
	}
})

/*
when image is clicked and shown in jumbotron, imgholder = this image 
imageIndex should equal this image parents node, parents node index of imageList
*/