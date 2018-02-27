// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos 
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata
Handlebars.registerHelper("xif", function(expression, options) {
	return Handlebars.helpers["x"].apply(this, [expression, options]) ? options.fn(this) : options.inverse(this);
  });

var gallery = {
	albums : [
		{
			name : "India", 
			thumbnail : "images/India.jpg",
			year : "2014",
			photos : [
				{	
					src : "images/India.jpg",
					title : "Taj Mahal", 
					location : "Agra",
					description : "..."
				},
				{	
					src : "images/Thailand.jpg",
					title : "Thai island", 
					location : "?",
					description : "..."
				} 
			]
		},
		{
			name : "Norway", 
			thumbnail : "images/Norway.jpg",
			year : "2015",
			photos : [
				{	
					src : "images/Norway.jpg",
					title : "Trollstigen", 
					location : "?",
					description : "..."
				}
			]
		},
		{
			name : "Thailand", 
			thumbnail : "images/Thailand.jpg",
			year : "2017",
			photos : [
				{	
					src : "images/Thailand.jpg",
					title : "Thai island", 
					location : "?",
					description : "..."
				} 
			]
		},
		{
			name : "Cuba", 
			thumbnail : "images/Cuba.jpg",
			year : "2018",
			photos : [
				{	
					src : "images/Cuba.jpg",
					title : "Colorful cars", 
					location : "Havana",
					description : "looks like he needs that jacket"
				}
			]
		}

	]
};