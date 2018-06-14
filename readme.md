Grunt SCSS, PHP - MAMP, Heroku Deploy

# grunt-screenchef

## Install
npm install && bower install

## Project
grunt-php based screenchef.com

# Heroku
heroku login
git push heroku master - auto deploys

## start dyno if application error in browser
heroku ps:scale web=1

##  set to heroku if not working
git remote add heroku git@heroku.com:project.git