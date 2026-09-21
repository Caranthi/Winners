#!/bin/sh
set -e

cd "$(dirname "$0")"

git pull

docker compose build

docker compose up -d backend
docker compose up -d frontend
