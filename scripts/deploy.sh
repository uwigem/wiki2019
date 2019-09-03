#!/bin/bash

# PREREQUISITES: 
# 	Install the iGEM-CLI globally: `npm install -g igem-cli`
#	Requires version: 1.0.2
# TODO: Add stuff about username and pass aliases

npm run build
igem-cli -t JavaScript ./build/static/js/main.js
igem-cli -t CSS ./build/static/css/main.css