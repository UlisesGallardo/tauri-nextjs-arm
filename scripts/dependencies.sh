#!/bin/bash

# Install Tauri dependencies
sudo apt --fix-broken install -y
sudo apt-get update -y --allow-releaseinfo-change
sudo apt-get autoremove -y
#sudo apt-get install -y --no-install-recommends --no-install-suggests curl libwebkit2gtk-4.1-dev build-essential libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev patchelf libfuse2 file
sudo apt-get install -f

# Install UI dependencies
sudo apt update
sudo apt install --no-install-recommends xserver-xorg x11-xserver-utils xinit openbox xterm -y

# Install application
sudo apt install -y ./tauri-nextjs_0.1.0_arm64.deb

# Start the application with xinit
sudo xinit tauri-nextjs-template -- :0