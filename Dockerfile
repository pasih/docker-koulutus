FROM ubuntu:xenial


RUN apt-get update && apt-get install -y --no-install-recommends apt-transport-https curl gnupg2 ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y --no-install-recommends nodejs

RUN rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
