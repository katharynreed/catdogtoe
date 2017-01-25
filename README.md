# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Application Behaviors
overall behavior summary:
initialize a game state with 9 spaces, 2 players.  Players take turns selecting spaces, until a win condition is met or all 9 spaces are filled.

objects:
player {mark:"cat" or "Dog", img: array of text of html image reference, winMessage: "win text"}
space {coordinate: [1-9], myMark:which player mark is in the space, myImg: which image to display}

Specs:

* Behavior: User chooses whether cat or dog plays first
  * input: cat
  * output: player "cat" goes first
* Behavior: Player chooses a space and their mark is displayed
  * input: cat player click space 9
  * output: space 9 displays a cat
* Behavior: When a player marks a winning space, game ends
  * input: cat player marks 3 spaces in a row
  * output: game ends
* Behavior: When game ends, display win message of winning player
  * input: Cat player wins
  * output: "Cat Wins!"








Wish list:
add different images when spaces are filled
write a genius AI
create option for two AIs to play each other

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
