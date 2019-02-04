cd ~/dadaboom
. ~/dadaboom/config/scripts/stop_server.sh
git pull
yarn
. ~/dadaboom/config/scripts/build_server.sh
. ~/dadaboom/config/scripts/start_server.sh
