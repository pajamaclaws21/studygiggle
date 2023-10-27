# studygiggle
A Google Drive project loader for Snap<em>!</em>, written in Node.JS and hosted on Render. <br>
This is something I've wanted to make for a while, and I'm glad to finally put it out there!

## how to use!
### if you want to host your project
1) Export a copy of your Snap<em>!</em> project to your computer. It should be an .XML file.
2) Upload your .XML file to Google Drive.
3) Open the "Share" menu, then set "General Access" to "Anyone with the Link" and "View."
4) Press the "Copy Link" button. Then, open that link.
5) Your link should look like this: https://drive.google.com/file/d/YOUR-ID/view, where YOUR-ID is the file identifier. Copy it.
6) Create a new Snap<em>!</em> project. In it, create a variable called "driveID" and set that variable to the file identifer you got in step 5.
7) Save your project and publish it. Title it something snappy.
8) You're all good!
### if you're trying to access someone else's project
1) Make sure you have the username of the user who made the project and the name of the project with the file identifier in it.
2) Go to the <a href="https://studygiggle.onrender.com">studygiggle website</a>.
3) Type in the username and the project name. Press the "Load Project" button.
4) Wait for the project to load. Once it does, press the "Get Project from Drive" button.
5) You're good to go!
### run into any issues?
#### if you're accessing someone else's project:
- make sure you're typing out the names correctly.
- make sure you're not pressing the "Get Project from Drive" button too soon -- it can take a second.
- it can take a few seconds for the project to load after you press the "Get Project from Drive" button. be patient!
- if you run into a message saying something about attributes after an equal sign, please write a bug report.

## license
this project is licensed under a modified ISC license. see the "pj's license" file for more details.
