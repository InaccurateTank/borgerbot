# Borgerbot
This bot literally just responds to all messages that involve the word "burger" and "borger" with the time in Borger Texas.  That's it, that's all it does.  Its entire purpose is an injoke.

Deployment of the bot is fairly simple.

## Docker (Prefered)
The docker container is a simple one based off of node:current-alpine.  Deployment is straightforward, with the main issue being inserting the token enviroment variable.
``` bash
sudo docker build https://github.com/InaccurateTank/borgerbot.git#main -t borgerbot
sudo docker run -d -e TOKEN=[INSERT_TOKEN] borgerbot
```