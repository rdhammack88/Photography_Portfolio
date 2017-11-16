
// SET VARIABLE HOLDERS
var jumboImage = document.getElementById('jumbotronImage').firstElementChild;
var imageElements = document.getElementsByClassName('item');
imageElements = Array.from(imageElements);
var imageList = [];
//var activeImagesLength = imageList.length;
//imageList.push(el.firstElementChild.firstElementChild);

// ADD ACITVE ELEMENTS TO ARRAY
for(let i = 0; i < 10; i++) {
	if(imageElements[i].classList.contains('active') ) {
		imageList.push(imageElements[i]);
	}
}

// FOR ALL ELEMENTS BEYOND THE 10TH ITEM ELEMENT - HIDE
for(let i = 10; i < imageElements.length; i++) {
	imageElements[i].classList.add('hidden');
}

// FOR EACH OF THE DIV.ITEM ELEMENTS, ADD A CLICK FUNCTION
imageElements.forEach(function(el) {
	//imageList.push(el.firstElementChild.firstElementChild);
	
	//el.classList.add('class', 'hidden');
	
	el.firstElementChild.firstElementChild.addEventListener('click', function() {
		jumboImage.src = this.src;
	})
	
	//console.log(el.firstElementChild); // imageElements[i].firstElementChild
})


// TESTS FOR THE CONSOLE
console.log(jumboImage);
console.log(imageList);
console.log(imageElements);


// BUTTON ELEMENTS TO LOAD AND HIDE DIV.ITEM ELEMENTS
var loadMoreImages = document.getElementById('load');
var hideSomeImages = document.getElementById('hide');

// LOAD MORE IMAGES TO THE SCREEN BUTTON
loadMoreImages.addEventListener('click', function() {
	//var i = 10;
	document.getElementById('hide').classList.remove('hidden');
	/*for(; i < i+10; i++) { //for(i = 10; i < (i + 10); i++) {
		imageElements[i].classList.remove('hidden');
	}*/
	
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
		console.log(activeImagesLength);
})

// HIDE IMAGES FROM THE SCREEN BUTTON
hideSomeImages.addEventListener('click', function() {
	//var i = 10;
	//this.classList.add('hidden');
//	for(; i < imageElements.length; i++) {	// imageElements.length	(i + 10)
//		imageElements[i].classList.add('hidden');
//	}
	
	var activeImagesLength = imageList.length;
	console.log(activeImagesLength);
	
	if( activeImagesLength < 10 ) {
		this.classList.add('hidden');
	} else {
		this.classList.remove('hidden');
	}
	
	
	if(activeImagesLength % 10 === 0) {
		var i = activeImagesLength - 1;
		var j = 10;
		console.log('line92');
	} else {
		var i = activeImagesLength - 1;
		var j = activeImagesLength % 10;
		console.log('line95');
	}
	
	for( i, j;
		 i >= activeImagesLength - j; 
		 i -= 1 ) {
		console.log('line101');
		imageElements[i].classList.add('hidden');
		imageElements[i].classList.remove('active');
		imageList.pop(imageElements[i]);
	}
	
	console.log(activeImagesLength);
})




//========================================================
//========================================================



/*if( imageElements.classList.contains('active') ) {
	
}

if( imageElements.classList.contains('hidden') ) {
	
}*/

//var activeImagesLength = imageList.length;
//for(; activeImagesLength < activeImagesLength + 10; activeImagesLength++) {
//	
//}




var quantity = imageElements.length;
var qty = quantity / 10;
var count = qty * 10

//imageElements.classList.contains('');