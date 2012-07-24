// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", function () {
	// create our sequence
	var sequence = Popcorn.sequence(
	                "sequence-player",
	                [
	                    {
	                        //src: "http://videos.mozilla.org/serv/webmademovies/atultroll.webm",
	                        src: "content/video/video1.webm",
	                        in: 41, //6,
	                        out: 44
	                    },
											{
                          // src:   "http://videos.mozilla.org/serv/webmademovies/justintime.ogv",
													src: 	"content/video/video3.webm",
													in: 7 , //174,
													out: 10 , //178
											},
	                    {
	                        //src: "http://videos.mozilla.org/serv/webmademovies/popcornplug.ogv",
	                        src: "content/video/video2.webm",
	                        in: 17,
	                        out: 20
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
