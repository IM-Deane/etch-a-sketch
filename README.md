PROJECT: ETCH-A-SKETCH

Purpose: 
    This project seeks to replicate the Etch-a-Sketch toy using an HTML skeleton, vanilla JavaScript, and some basic CSS styling. 

    The main purpose is to practice DOM manipulation and learn more about implementing a CSS grid template.

Current Version: 1.0

Description: 
    The Etch-a-sketch was a children's toy created sometime in the 1950's by Andre Cassanges. The toy has a basic user interface featuring a screen for output and two input knobs that would control a stylus by moving it horizontally or vertically. These I/O functions are embedded onto a bright red frame with the products name emblazoned on the top of portion.

    For my implementation, I decided to remain true to the original style of the product with a slight variation to the interface.
    Instead of vertical and horizontal buttons, the program uses the mouse cursor to "paint" in the direction that user wants to draw. This gives them more freedom than if the stylus' movement had been tied to the arrow keys.

    The program also includes a button at the top that allows the user to change the size of the screens grid. By entering a lower number such as '2' the screen will produce a larger cell and fill up much quicker. A larger number like '64' will have the inverse effect on the screen.

    Note: For best results, I wouldn't go above 64 as the screen becomes less responsive to the mouse.


Version History:

    Version 1.0:
        This version features a fully functional etch-a-sketch program that meets the design specifications I had in mind when I started the project. 

        Major notes:
        - Contains all of the files (index.html; sketchCode.js; sketchyStyle) required to run the program.
        - Interface includes: Red frame, output screen, gold title embedded in frame, and a button that controls the size of the grid.

    Future Versions:
        - I am thinking of adding a feature that will let the user change the color of the stylus from black to a small set of predefined colors.
        - May add knobs to the frame as part of my effort to recreate the product
        - More responsive title. As of now the title-text has been hand placed onto the frame. If the frame were to shrink or be relocated the text would NOT follow it.