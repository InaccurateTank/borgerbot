# Borgerbot
Personal general-purpose discord bot.  Mostly just says borger for the moment.

Deployment of the bot is fairly simple.

## Docker (Prefered)
The docker container is a simple one based off of node:current-alpine.  Deployment is straightforward, with the main issue being inserting the token enviroment variable.

cmd:
```
sudo docker build https://github.com/InaccurateTank/borgerbot.git#main -t borgerbot
sudo docker run -d -e TOKEN=[INSERT_TOKEN] --name borgerbot borgerbot
```

docker-compose: (run with `docker-compose up -d`)
``` yml
version: '3'

services:
  borgerbot:
    build: https://github.com/InaccurateTank/borgerbot.git#main
    container_name: borgerbot
    environment:
      - TOKEN=[INSERT_TOKEN]
```