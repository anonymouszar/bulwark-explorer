#!/bin/bash
# Download latest node and install.
vestxlink=`curl -s https://api.github.com/repos/anonymouszar/vest/releases/latest | grep browser_download_url | grep linux64 | cut -d '"' -f 4`
mkdir -p /tmp/vestx
cd /tmp/vestx
curl -Lo vestx.tar.gz $vestxlink
tar -xzf vestx.tar.gz
sudo mv ./bin/* /usr/local/bin
cd
rm -rf /tmp/vestx
mkdir ~/.vestx

# Setup configuration for node.
rpcuser=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 13 ; echo '')
rpcpassword=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 32 ; echo '')
cat >~/.vestx/vestx.conf <<EOL
rpcuser=$rpcuser
rpcpassword=$rpcpassword
daemon=1
txindex=1
EOL

# Start node.
vestxd
