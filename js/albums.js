// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos 
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata

var gallery = {
	albums : [
		{
			name : "Croatia", 
			thumbnail : "images/Croatia2.jpg",
			year : "2013",
			photos : [
				{	
					src : "images/Croatia1.jpg",
					title : "Baska", 
					location : "Baska, Croatia",
					description : "Eurotrip with friends"
				},
				{	
					src : "images/Croatia2.jpg",
					title : "Plitvice Lakes", 
					location : "Plitvice lakes, Croatia",
					description : "Eurotrip with friends"
				}

			]
		},
		{
			name : "Slovenia", 
			thumbnail : "images/Slovenia1.jpg",
			year : "2013",
			photos : [
				{	
					src : "images/Slovenia2.jpg",
					title : "Canyoning", 
					location : "Slovenia",
					description : "It was awesome!"
				},
				{	
					src : "images/Slovenia1.jpg",
					title : "Beautiful village", 
					location : "Slovenia",
					description : "It was awesome!"
				},

			]
		},
		{
			name : "India", 
			thumbnail : "images/India.jpg",
			year : "2014",
			photos : [
				{	
					src : "images/India1.jpg",
					title : "Temple", 
					location : "Jaipur",
					description : "..."
				},
				{	
					src : "images/India.jpg",
					title : "Taj Mahal", 
					location : "Agra",
					description : "..."
				}
			]
		},
		{
			name : "France", 
			thumbnail : "images/Paris.jpg",
			year : "2018",
			photos : [
				{	
					src : "images/Paris2.jpg",
					title : "Notre Dame", 
					location : "Paris",
					description : "looks like he needs that jacket"
				},
				{	
					src : "images/Paris.jpg",
					title : "Eiffel Tower", 
					location : "Paris",
					description : "looks like he needs that jacket"
				},
			]
		},
		{
			name : "Germany", 
			thumbnail : "images/Berlin.jpg",
			year : "2014",
			photos : [
				{	
					src : "images/Berlin.jpg",
					title : "Television Tower", 
					location : "Berlin",
					description : "..."
				}
			]
		},
		{
			name : "Austria", 
			thumbnail : "images/Vienna.jpg",
			year : "2014",
			photos : [
				{	
					src : "images/Austria2.jpg",
					title : "Obertauern", 
					location : "Austria",
					description : "..."
				},
				{	
					src : "images/Vienna.jpg",
					title : "Schönbrunn Palace", 
					location : "Vienna",
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
					src : "images/Norway1.jpg",
					title : "Trollstigen", 
					location : "Norway",
					description : "..."
				},
				{	
					src : "images/Norway2.jpg",
					title : "Hytte", 
					location : "Norway",
					description : "..."
				},
				{	
					src : "images/Norway.jpg",
					title : "Trollstigen", 
					location : "Norway",
					description : "..."
				},
			]
		},
		{
			name : "Sweden", 
			thumbnail : "images/Sweden1.jpg",
			year : "2015",
			photos : [
				{	
					src : "images/Sweden1.jpg",
					title : "Karlskrona", 
					location : "Sweden",
				},
				{	
					src : "images/Sweden2.jpg",
					title : "Karlskrona", 
					location : "Sweden",
				},
			]
		},
		{
			name : "Italy", 
			thumbnail : "images/Italy.jpg",
			year : "2016",
			photos : [
				{	
					src : "images/Italy1.jpg",
					title : "Cinque Terre", 
					location : "Italy",
					description : "..."
				},
				{	
					src : "images/Italy2.jpg",
					title : "Pisa", 
					location : "Italy",
					description : "..."
				},
				{	
					src : "images/Italy.jpg",
					title : "Cinque Terre", 
					location : "Italy",
					description : "..."
				}
			]
		},
		{
			name : "Ireland", 
			thumbnail : "images/Dublin.jpg",
			year : "2016",
			photos : [
				{	
					src : "images/Dublin1.jpg",
					title : "Dublin", 
					location : "Ireland",
					description : "..."
				},
				{	
					src : "images/Dublin.jpg",
					title : "Dublin", 
					location : "Ireland",
					description : "..."
				},
			]
		},
		{
			name : "Hungary", 
			thumbnail : "images/Budapest1.jpg",
			year : "2017",
			photos : [
				{	
					src : "images/Budapest1.jpg",
					title : "Budapest1", 
					location : "Hungary",
					description : "..."
				},
				{	
					src : "images/Budapest2.jpg",
					title : "Budapest1", 
					location : "Hungary",
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
					src : "images/Thailand1.jpg",
					title : "Krabi", 
					location : "Thailand",
					description : "..."
				},
				{	
					src : "images/Thailand2.jpg",
					title : "Krabi", 
					location : "Thailand",
					description : "..."
				},
				{	
					src : "images/Thailand.jpg",
					title : "Thai island", 
					location : "Thailand",
					description : "..."
				} 
			]
		},
		{
			name : "Canada", 
			thumbnail : "images/Toronto.jpg",
			year : "2018",
			photos : [
				{	
					src : "images/Toronto.jpg",
					title : "Toronto", 
					location : "Canada",
					description : "..."
				}
			]
		},
		{
			name : "Cuba", 
			thumbnail : "images/Cuba1.jpg",
			year : "2018",
			photos : [
				{	
					src : "images/Cuba2.jpg",
					title : "Trinidad", 
					location : "Cuba",
					description : "..."
				},
				{	
					src : "images/Cuba1.jpg",
					title : "Varadero", 
					location : "Cuba",
					description : "..."
				}
			]
		},
		{
			name : "Slovakia", 
			thumbnail : "images/Slovakia.jpg",
			year : "2018",
			photos : [
				{	
					src : "images/Slovakia2.jpg",
					title : "High Tatras", 
					location : "Slovakia",
					description : "..."
				},
				{	
					src : "images/Slovakia.jpg",
					title : "Spišský hrad", 
					location : "Zehra",
					description : "..."
				}
			]
		},
		{
			name : "Czech Republic", 
			thumbnail : "images/Lednice.jpg",
			year : "2018",
			photos : [
				{	
					src : "images/Prague.jpg",
					title : "Gardens", 
					location : "Prague",
					description : "..."
				},
				{	
					src : "images/Lednice.jpg",
					title : "Lednice", 
					location : "Czech REpublic",
					description : "..."
				}
			]
		},
	]
};