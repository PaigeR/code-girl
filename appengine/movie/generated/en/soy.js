// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">start x</span><span id="Movie_y1">start y</span><span id="Movie_x2">end x</span><span id="Movie_y2">end y</span><span id="Movie_radius">radius</span><span id="Movie_width">width</span><span id="Movie_height">height</span><span id="Movie_circleTooltip">Draws a circle at the specified location and with the specified radius.</span><span id="Movie_circleDraw">circle</span><span id="Movie_rectTooltip">Draws a rectangle at the specified location and with the specified width and height.</span><span id="Movie_rectDraw">rectangle</span><span id="Movie_lineTooltip">Draws a line from one point to another with the specified width.</span><span id="Movie_lineDraw">line</span><span id="Movie_timeTooltip">Returns the current time in the animation (0-100).</span><span id="Movie_colourTooltip">Changes the colour of the pen.</span><span id="Movie_setColour">set colour to</span><span id="Movie_submitDisabled">Your movie doesn\'t move. Use blocks to make something interesting. Then you may submit your movie to the gallery.</span></div>';
};


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table>' + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="visualization"><canvas id="scratch" width="400" height="600" style="display: none"></canvas><canvas id="superhero" width="400" height="600" style="display: none"></canvas><canvas id="hatching" width="400" height="600" style="display: none"></canvas><canvas id="axies" width="400" height="600" style="display: none"></canvas><canvas id="display" width="400" height="600" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Customize your avatar using the toolbar! Start with the shirts.' : (opt_ijData.level == 2) ? 'Add shoes to your avatar using the toolbar.' : (opt_ijData.level == 3) ? 'The \'time\' block counts from 0 to 100. But this time you want the horizontal position of the red ball to start at 100 and go to 0. Can you figure out a simple mathematical formula that flips the direction?' : (opt_ijData.level == 4) ? 'Use what you learned in the previous level to make four green balls that move in all four directions.' : (opt_ijData.level == 5) ? 'Making the mouse\'s head move is easy. Can you work out the math to make the ears move too?' : (opt_ijData.level == 6) ? 'Two simple lines. Just figure out what the line ends are doing.' : (opt_ijData.level == 7) ? 'The mathematical formula for this falling ball is complicated. Here\'s the answer:<br><br><code style="font-size: 150%; margin: 0 1em;">y = 100 - (((time - 50) &divide; 5) ^ 2)</code>' : (opt_ijData.level == 8) ? 'Use the \'if\' block to draw red and blue balls for the first half of the movie. Then draw a green ball for the second half of the movie.' : (opt_ijData.level == 9) ? 'Can you make a ball that follows the wire? The wire has already been drawn for you. Once you can do this, you can do anything.' : (opt_ijData.level == 10) ? 'Make a movie of anything you want. You\'ve got a huge number of new blocks you can explore. Have fun!' + ((! opt_ijData.html) ? '<br><br>Use the "See Gallery" button to see movies that other people have made. If you make an interesting movie, use the "Submit to Gallery" button to publish it.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Shirts"><block type="tshirt"></block><block type="longsleeve"></block></category><category name="Shoes"><block type="boots"></block><block type="cowboyboots"></block></category><category name="Color"><block type="movie_colour"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="colour_picker"> <field name="COLOUR">#ff9559</field> </block></category></xml>';
};


Movie.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
