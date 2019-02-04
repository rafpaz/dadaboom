#!/usr/bin/env bash
cd ~/dadaboom
yarn build
pm2 start ~/dadaboom/server -l ~/dadaboom/logs/app.log -i max
