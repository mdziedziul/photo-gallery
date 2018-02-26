// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos 
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata

var gallery = {
	albums : [
		{
			name : "India", 
			thumbnail : "images/India.jpg",
			photos : [
				{	
					src : "images/India.jpg",
					title : "Taj Mahal", 
					description : "..."
				}
			]
		},
		{
			name : "Thailand", 
			thumbnail : "images/Thailand.jpg",
			photos : [
				{	
					src : "images/Thailand.jpg",
					title : "Thailand", 
					description : "..."
				} 
			]
		},
		{
			name : "Cuba", 
			thumbnail : "images/Cuba.jpg",
			photos : [
				{	
					src : "images/Cuba.jpg",
					title : "dog in the snow", 
					description : "looks like he needs that jacket"
				}
			]
		}

	]
};