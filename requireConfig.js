
// SO this could be the config file that conigures all your paths.  
// Require starts looking for files at the root path set in the data-main
require.config(
{
	paths: {
		'jquery': ['http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
								'jquery.js']
	}
});

message module is loaded and the result is returned to the message param
require(['jquery', 'message'],function($, message){
	// first text posted to index page
	// $('.output').html("So long, and thanks for all the fish!");
	$('.output').html(message)
});