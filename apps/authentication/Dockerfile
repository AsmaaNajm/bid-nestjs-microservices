FROM node:alpine As development

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

COPY package*.json ./

COPY tsconfig.json .
COPY nest-cli.json .

RUN npm install

COPY apps/authentication apps/authentication
COPY libs ./libs

# RUN apk add busybox-extras  # telnet
CMD npm run build --no-cache authentication

# FROM node:alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package-lock.json ./

# # RUN npm install -g yarn
# RUN npm install -g @nestjs/cli

# RUN npm install

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/apps/authentication/main"]