Basic functionality for the defining movie segments to be played.
Allows segment editing / deletion

Known Deficiencies:
 - No check on the start / finish times - if  you pick start time later than finish time you are on your own
 - No checks on segment length
 - No check of duplicate segment names

There are 3 implementations
1. All in one - Everything is in one Index file  - Proof of Concept
2. Pure Front End Implementation - Jquery based solution
3. Angular Impementation - requires running static server for routing

Dependencies
- No Bower/NPM modules are included in this repo, see package.json & bower.json for dependencies