//The javascript code for gallery 

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled 
// templates many times
var albums_template, photos_template, photo_template, slideshow_template;

// variables to store the current displayed album and photo
var current_album = gallery.albums[0];
var current_photo = current_album.photos[0];

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){
	
	// compile all of our templates ready for use	
	var source   = $("#albums-template").html();
	albums_template = Handlebars.compile(source);
	
	source   = $("#photos-template").html();
	photos_template = Handlebars.compile(source);
	
	source   = $("#photo-template").html();
	photo_template = Handlebars.compile(source);

	source   = $("#slideshow-template").html();
	slideshow_template = Handlebars.compile(source);
	
	 
	//  clicking on the albums tab shows the 
	//  thumbnails of all the albums	
	$("#albums-tab").click(function () {

		// displays the albums template
		showTemplate(albums_template, gallery);

		// make the albums tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");

		// then make albums tab active
		$("#albums-tab").addClass("active");

		// add a click callback to each album 
		// thumbnail which displays the photos
		// template on that album
		$(".album-thumbnail").click(function (){
			
			// get the index (position in the array)
			// of the album we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the album in
			// the array - @index)
			var index = $(this).data("id");

			// set the current album to this album
			current_album = gallery.albums[index];

			// displays the photos template
			showTemplate(photos_template, current_album);

			// Set variable th - it will be the index of photo-thumbnail
			document.getElementById('go-back').style.visibility="visible";
			var th;

			$(".cursor").click(function (){
				// What happens if you close the big photo?
				// Set index to index of photo-thumbnail (th)
				var index = $(th).data("id");
				document.getElementById(index).style.display = "none";
			});

			$("#go-back").click(function () {
				(this).style.visibility="hidden";
			});

			$(".photo-thumbnail").click(function () {
				// display the slideshow template using the 
				// current album
				showTemplate(slideshow_template, current_album);
				
				// make the slideshow tab the active one
				// first make the currently active tab inactive
				$(".nav-tabs .active").removeClass("active");

				// then make slideshow tab active
				$(".photo-thumbnail").addClass("active");
			});
		});
	});
	
	// Start the page by showing the albums view
	$("#albums-tab").click();

});