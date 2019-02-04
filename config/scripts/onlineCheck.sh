ADDRESS="https://dadaboom.co.il"
LOG_FILE="/var/log/onlineCheck.log"
MEM_CHECK_LOG_FILE="/var/log/memCheck.log"

if ! curl -s --head $ADDRESS | grep "200 OK" > /dev/null
  then
		if tail -n 1 $LOG_FILE | grep "LIVE" > /dev/null
			then
				echo "On $(date) the website is down" | mail -s "Dadaboom website is down!!!" refaelypaz@gmail.com
				pm2 restart 0
				#. ~/dadaboom/config/scripts/stop_server.sh
				#. ~/dadaboom/config/scripts/start_server.sh
		fi
		echo "$(date) - DOWN" >> $LOG_FILE
else
	echo "$(date) - LIVE" >> $LOG_FILE
	freemem=$(free -m | grep Mem | awk '{print $4}')
	minmem=150
	if [ $freemem -lt $minmem ]
		then
			if tail -n 1 $MEM_CHECK_LOG_FILE | grep "ok" > /dev/null
				then
					echo "On $(date) free memory of dadaboom $freemem is less then $minmem" | mail -s "Dadaboom server alert" refaelypaz@gmail.com
			fi
			echo "$(date) - DANGER - Free Memory: $freemem" >> $MEM_CHECK_LOG_FILE
	else
		echo "$(date) - ok - Free Memory: $freemem" >> $MEM_CHECK_LOG_FILE
	fi
fi
