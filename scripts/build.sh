#!/usr/bin/env bash
set -e

# import .env vars
FILE=../../.env
if test -f "$FILE"; then
  set -o allexport; source $FILE; set +o allexport
fi

# @see https://github.com/vitejs/vite/issues/2433
NODE_OPTIONS=--max-old-space-size=8192 vite build


