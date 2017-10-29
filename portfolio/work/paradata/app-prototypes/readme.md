[![Build Status](https://magnum.travis-ci.com/ParableSciences/app-prototypes.svg?token=m5yVf1sYsYAei7qAvpJs&branch=master)](https://magnum.travis-ci.com/ParableSciences/app-prototypes)

## What you need to have?

##########################################
// Install the following:
``nodejs / npm``, ``npm install grunt-cli``, ``gem install sass``, ``npm install bower``

## How to install it

// Run the following in command line
``npm install`` maybe ``sudo npm install``

``bower install``

## How to run it

``grunt`` command from root folder of project ("proto" folder)


IN PROJECT: 
###########################################

Create the following hidden files:

.gitignore - paste the following: (git ignore these)

node_modules/.bin/**
node_modules/**
.*

!.bowerrc
!.gitignore

.bowerrc - paste the following: (move the bower_components folder)
{
  "directory": "./app/common/bower_components",
  "analytics": false
}
