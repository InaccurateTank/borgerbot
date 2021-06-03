FROM node:current-alpine
WORKDIR /srv/borgerbot
ENV NODE_ENV=production

COPY ["package.json", "package-lock.json", "bot.js", "./"]

RUN npm install --production

ENTRYPOINT [ "node", "bot.js" ]
