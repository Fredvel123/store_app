#!/bin/bash

# installing project with yarn
echo "What do you prefer? just type yarn or npm"
read npm_package 

cd client/
echo $npm_package
echo "Installing React Packages"
$npm_package install
echo "React installed"

sleep 2

echo "Installing Express Packages"

cd server/

$npm_package install
echo "Express project installed"

sleep 2 

echo "Fullstack project installed"