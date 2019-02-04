LOG_FILE="/var/log/onlineCheck.log"

cd ~/dadaboom 
pm2 start 0 -i max
echo "$(date) - LIVE" >> $LOG_FILE
