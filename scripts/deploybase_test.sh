#!/bin/bash

# PREREQUISITES: 
# 	Install the iGEM-CLI globally: `npm install -g igem-cli`
#	Set the environment variables inside .bashrc:
#		export IGEM_USERNAME=username
#		export IGEM_PASSWORD=password
#		export IGEM_TEAM=Washington
#		export IGEM_YEAR=2019
#	Requires version: 1.0.2
#
# To run this file, do `npm run deploybase`

igem-cli -t Template_Test ./scripts/template_test.html 