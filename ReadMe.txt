This folder contains the updated SaaSUpdate Notice files
before unzipping this file in the proper directory, Please archive the following:


CSS folder
images folder
js folder
modified index files
index.html
index_org.html

The structure of the new files are as follows:
bootstrap folder - contains bootstrap css & js files & folders
css folder - contains local editable css file
js folder - contains main.js from previous project that holds the cookie functionality
index.html - front page to the notice
this ReadMe.txt file - this

I don't know why the <!--Set the update dates--> script is at the bottom of the index file instead of in the head, but since it was obviously working that way, I left it, along with the id="fromDate & id="toDate" referenced in the code.

If you are manually changing the date on the html page, you can find it on line 63.  I'll look at automating that in a future update.

future update: make this whole page a modal over the main page.

11/30/20
removed card 2 and realigned card 1 to center.  gave more padding to the top of the page.
