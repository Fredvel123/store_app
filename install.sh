#!/bin/bash

# installing project with yarn
echo "What do you prefer? just type yarn or npm"
read npm_package 
if [ $npm_package == 'yarn' ] || [ $npm_package == 'npm' ]
then 
echo " ----- Installing packages with $npm_package ---- "
sleep 3
cd client/

echo "**** ALERT: Installing React Packages ****"
$npm_package install
echo "----- React installed"

sleep 2

echo "**** ALERT: Installing Express Packages ****"

cd server/

$npm_package install
echo "----- ALERT: Express project installed"

sleep 2 

echo "----- ALERT: Fullstack project installed"
else 
echo 'WARNING: Only use npm or yarn package manager'
fi
