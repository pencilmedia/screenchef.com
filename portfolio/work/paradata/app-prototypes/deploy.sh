#!/bin/bash

echo Building branch:$TRAVIS_BRANCH
if [ '"'$TRAVIS_BRANCH'"' != '"'master'"' ];
then
    echo 'Only MASTER branch will be deployed';
    exit 0;
fi;

export DEPLOY_USER=ubuntu
export DEPLOY_SERVER=52.7.133.69

# Copy app to server
rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress --delete . $DEPLOY_USER@$DEPLOY_SERVER:/home/ubuntu/app/app-prototypes

# Move nginx config
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null $DEPLOY_USER@$DEPLOY_SERVER 'sudo cp -f /home/ubuntu/app/app-prototypes/nginx.conf /etc/nginx/'

# Reload nginx server
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null $DEPLOY_USER@$DEPLOY_SERVER 'sudo nginx -s reload'
