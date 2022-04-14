#!/bin/sh

USER=`whoami`
echo "checking if directory exist in $USER" 
### Check if a directory does not exist ###
if [ ! -d "/home/$USER/.deno/bin/deno" ] 
then
    echo "/home/$USER/.deno/bin/deno does not exist" 
    # curl -fsSL https://deno.land/install.sh | sh
fi
 

echo "building server"
sudo /home/$USER/.deno/bin/deno bundle $1bridge/server.js server.js

echo "update server code"
if ! $1
then
 cd $1 && git pull
else
git pull
fi

echo "start server"
cd ../
nohup sudo /home/$USER/.deno/bin/deno run  --allow-net --allow-read --allow-env server.js &

