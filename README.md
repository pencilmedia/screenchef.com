# Create New Express Project
Includes gruntfile.js and package.json

## Installation
##########################################

1. What should already be installed:
nodejs/npm
express
express-generator
gem install sass ( FOR El Capitan OSX: sudo gem install -n /usr/local/bin sass )


2. Create new project:
express -e "name-of-proj" ( -e for ejs)


3. Place Gruntfile.js and package.json into the root of new project, then run:

npm install
or 
sudo npm install -g grunt

The project should download all the package dependencies


## How to RUN it
------------------------------------------
open 2 terminals:

Term 1:
``npm start`` command from root folder of project

Term 2:
"grunt" command from root folder of project



## In the project
------------------------------------------
Create the following hidden files:

.gitignore - paste the following: (git ignore these)

node_modules/.bin/**
node_modules/**
.*

!.bowerrc
!.gitignore
