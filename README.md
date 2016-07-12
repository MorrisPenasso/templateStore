# templateStore
This is a simple Template Store in AngularJS. 

In this web application, i use "angular-feed" project, the seed for AngularJS apps and i used bower package manager for install bootstrap and jquery. 

Angular-seed project allow to obtain a default angular project with the follow most important file precompiled:

- Index file
- Two views
- Two controller's viwes
- Configuration file ( app.js ) with ngRoute module that allows to mapping your views/controllers
- And more...

### BEFORE TO DOWNLOAD MY PROJECT, FOLLOW THIS STEPS

- For the first thing, clone angular-seed with this command:
  git clone --depth=1 https://github.com/angular/angular-seed.git <your-project-name>. 
  We have create a standard Angular App

- Open your project folder with Git Bash and call "npm install" command. This command has been built into angular-seed for       import all node-modules, it import Bower Package Manager and automatically he import Angular Framework and angular-route.

- Call "bower install bootstrap" to install Bootstrap and JQuery.
 
For more details, see angular-seed repository and follow steps to configure your project: https://github.com/angular/angular-seed

**I LOADED ONLY FILES THAT I BUILT WITHOUT ALL DIRECTORY OF ANGULAR-SEED, BOWER COMPONENTS AND ALL NODE-MODULES. REPLACE YOUR APP FOLDER CONTENT WITH MY PROJECT AND DELETE VIEW1 AND VIEW2 FOLDER**

 - Call "npm start" command to create a local web server and to read all data into "/app" folder.

  Now open your browser and call localhost:8000


![cattura](https://cloud.githubusercontent.com/assets/20413873/16768492/e23b2f48-4844-11e6-8c5b-5843f409a510.PNG) 

When you click "details", you call another view and pass in the items id for show all his content.

![cattura2](https://cloud.githubusercontent.com/assets/20413873/16768732/cf35b926-4845-11e6-9b59-ed1026f0cd4c.PNG)
When you click "Buy now" button, you call the PayPal API and pass in template's details ( price, item name ... )

![cattura3](https://cloud.githubusercontent.com/assets/20413873/16768513/efc70588-4844-11e6-84d2-f37260e2cd44.PNG)

