killall node
cerbot renew
cd ~/dadaboom; forever start -c "npm start" -l LogFile -a ./; tailf /root/.forever/LogFile;
