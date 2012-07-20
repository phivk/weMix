// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", function () {
	// create our sequence
	var sequence = Popcorn.sequence(
	                "sequence-player",
	                [
	                    {
	                        src: "http://videos.mozilla.org/serv/webmademovies/atultroll.webm",
	                        in: 6, // 12.7,
	                        out: 7
	                    },
											{
													src: 	"http://videos.mozilla.org/serv/webmademovies/justintime.ogv",
													in: 5 , //174,
													out: 7 , //178
											},
	                    {
	                        src: "http://videos.mozilla.org/serv/webmademovies/popcornplug.ogv",
	                        in: 0,
	                        out: 6
	                    }
	                ]);

	// play popcorn
  // sequence.play();

	// sequence.footnote({
	//     start: 0,
	//     end: 2,
	//     text: "footnote",
	//     target: "foo"
	// });

	// get popcorn object of first video
	console.log( sequence.eq( 0 ) );

	//exec something at 4 seconds
	sequence.exec( 4, function() {
					    console.log( "AT 4 SECONDS" );
	});

}, false);
