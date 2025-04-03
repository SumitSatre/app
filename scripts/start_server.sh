#!/bin/bash
cd /home/ec2-user/nodejs-app
npm install
pm2 stop all
pm2 start server.js
pm2 save
