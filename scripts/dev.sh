#!/usr/bin/env bash
set -e

# import .env vars
FILE=../../.env
if test -f "$FILE"; then
  set -o allexport; source $FILE; set +o allexport
fi
echo "starting"

vite --port 3000 --open --host
