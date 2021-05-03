 # **_TEAM-GENERATOR_**
  
## **_Description_**
This application assists users with creating a team profile using a command line prompted questionnaire that generates an HTML template that users can customize however they so choose. 

## **_Technologies Used_**  
* JavaScript
* NodeJS (Inquirer)
* Jest

## **_Installation_**
Note: users are expected to have some knowledge of JavaScript

* Install [NodeJS](https://nodejs.org/en/download/) if you haven't done so yet.
* You should also have pulled this repository at this point (we'll get to Node in second)
* On your project directory, you will initialize npm by typing ```npm init```
* After that command runs a series of processes, you're ready to use npm.
* Type ```npm install inquirer``` on the root of the repo you've just pulled. This will fetch inquirer making it possible for Node to use the functionality provided by the inquirer package. 
* Type ```npm install --save-dev jest``` at the root of the repo to install Jest which you'll need to test the application
* After npm install jest, open the 'package.json' file and change the 'test' key to the 'jest' value.
* At this point, the project is ready. You can modify your tests but for now, run ```npm run test``` like shown in the video below. Your test should pass due to the configuration of this repo but feel free to play around with the test suite. 

https://user-images.githubusercontent.com/35352010/116850987-76bdc080-aba6-11eb-9dff-5ce4993c17f4.mov

* Let's now run ```node index.js``` on your terminal (make sure you're on the same directory as the 'index.js' file when you run the command)
* You should be getting prompted to answer questions on your command line. Go through them and an HTML file will be generated as shown in the following video:

https://user-images.githubusercontent.com/35352010/116851063-994fd980-aba6-11eb-84fd-c63a82376eac.mov

The HTML should produce something similar to the image below should you choose not to change the HTML codeblock in the 'htmlGenerator.js' file:

<img width="1779" alt="Screen Shot 2021-05-03 at 12 37 58 AM" src="https://user-images.githubusercontent.com/35352010/116851813-f8621e00-aba7-11eb-912c-e58ab6a0c3c6.png">

That's it you're done! 
