# templateStore
This is a simple Template Store in AngularJS. 

In this web application, i use "angular-feed" project, the seed for AngularJS apps and i used bower package manager for install bootstrap and jquery. 

##FOLLOW THIS STEPS

Angular-seed project allow to obtain a default angular project with the follow most important file precompiled:

- Index file
- Two views
- Configuration file ( app.js ) with ngRoute module that allows to mapping your views/controllers
- And more...

For the first thing, clone angular-seed and paste in your new project folder.

Open your project folder with Git and call "npm-install" command. This command has been built into angular-seed for install all node-modules, Bower Package Manager to install Angular Framework and ngRoute Angular module.
( all bower components will be integrated into index file )

Call "npm-start" command to built a local web server and to read all data into "/app" folder.

For more details, see angular-seed repository and follow steps to configure your project: https://github.com/angular/angular-seed

Now that you have create a default Angular project, you can built this web application:

**I LOADED ONLY FILES THAT I BUILT WITHOUT ALL DIRECTORYS of ANGULAR-SEED, BOWER COMPONENTS AND ALL NODE-MODULES.**

![cattura](https://cloud.githubusercontent.com/assets/20413873/16768492/e23b2f48-4844-11e6-8c5b-5843f409a510.PNG) 

When you click "details", you call another view and pass in the items id for show all his content.

![cattura2](https://cloud.githubusercontent.com/assets/20413873/16768732/cf35b926-4845-11e6-9b59-ed1026f0cd4c.PNG)
When you click "Buy now" button, you call the PayPal API and pass in template's details ( price, item name ... )

![cattura3](https://cloud.githubusercontent.com/assets/20413873/16768513/efc70588-4844-11e6-84d2-f37260e2cd44.PNG)

