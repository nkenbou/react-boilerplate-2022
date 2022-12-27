FROM node:16.18.1-bullseye

RUN	apt-get update && apt-get install -y --no-install-recommends \
    fonts-noto-cjk \
    chromium \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

USER node:node

WORKDIR /app

COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile
RUN mkdir ./node_modules

COPY . .

EXPOSE 3000 6006
CMD ["/bin/bash"]
