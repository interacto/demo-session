
# Practical Session with Interacto

- clone the project and run `npm install` in the project folder to install the dependencies


- run the Angular app (run `Angular CLI Server`)


- Open the documentation we provided on Interacto (https://interacto.github.io/)


## #1 -- Triple click to change a color

A triple-click on the div element `triple` (located in the HTML file) must change the color contained in `dataService` to a random color value.
The background color of this `triple` div element uses `dataService.color` so that you should be able to see the change.

The class `DataService` already provides a method `setNewRandomColor` to set its `color` attribute with a new random value.


**Question 1** Implement this feature without considering undo/redo.

- With Interacto, `clicksBinder(nb)` refers to an N-click interaction.


**Question 2** Adapt your code to be able to undo/redo color changes.




## #2 -- Write text

Editing the text of the `textarea` HTML element must change `dataService.text`.

A precision: do this action when the textarea is idle for 1 second.
For example: the user writes a sequence of letters and then stops for more than 1 second, so that `dataService.text` is updated.

This is a mainstream optimisation that many text processing tools implement to limit the number of editing actions.


**Question 1** Implement this feature without considering undo/redo.





## #3 -- Drag-and-drop a shape

The last exercise consists in moving a rectangle using a drag-and-drop interaction:
Press on the rectangle, drag it to a location, and release it to end its translation.

The rectangle to move is the rectangle `rec` defined in the HTML file.


**Question 1** Implement this feature without considering undo/redo.

Note that the Interacto `dndBinder(true)` may help you. The attribute `dataService.position` defines the x/y coordinates of the rectangle.


**Question 2** Adapt your code to be able to undo/redo the moves.


