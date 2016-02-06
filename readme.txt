Basic functionality for the defining movie segments to be played.
Allows segment editing / deletion

Known Deficiencies:
 - No check on the start / finish times - if  you pick start time later than finish time you are on your own
 - No checks on segment length
 - No check of duplicate segment names
 - No check that the fragment player window is opened while trying to play previously saved fragment out of the fragments table

There are 3 implementations
1. All in one - Everything is in one Index file  - Proof of Concept
	- Files: index_all_in_one.html
	- Doesn't require server to run
2. Pure Front End Implementation - Jquery based solution
	-Files: Public/index_jquery.html, Public/CSS/main.css, Public/js/main.js
	- Doesn't require server to run
3. Angular Impementation 
	- Files: server_ng, Public/index.html, fragmentForm.html, fragmentPlay.html Public/CSS/main.css, Public/js/app.js
	- Requires angular files in Public/bower_components & npm Express in node_modules
	- Requires running static server for routing

Dependencies
- No Bower/NPM modules are included in this repo, see package.json & bower.json for dependencies