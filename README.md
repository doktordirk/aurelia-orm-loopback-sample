# Aurelia-api-loopback-sample

[![Join the chat at https://gitter.im/SpoonX/Dev](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SpoonX/Dev?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is a skeleton for an [Aurelia](http://aurelia.io/) client using [spoonx/aurelia-api](https://github.com/SpoonX/aurelia-api) for rest access to a [Strongloop](http://loopback.io/) loopback api server.

..

## Installation instructions

```sh
git clone https://github.com/dirkeisinger/aurelia-api-loopback-sample
cd aurelia-api-loopback-sample
npm install
cd client
npm install
jspm install
```

## How to run the sample

In the root folder type:

```sh
npm start
```

Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

## What's in it

### Server

```sh
/server
/common
```

A [loopback](https://docs.strongloop.com/display/public/LB/LoopBack) api server with a customer model.

A local file is used as database. Have a peek at [server/mydata.json](server/mydata.json) to gain some insight.

#### Client

```sh
/client
/client/src/modules/customers
```

An aurelia client app. The aurelia-api rest client is configured in [scr/main.js](src/main.js) and used in [client/scr/modules/customer/customerData](client/scr/modules/customer/customerData) for rest access to server's customer api.

## Support

- Aurelia Gitter chat [![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Spoonx/Dev Gitter Chat for aurelia-api/-authentication/-orm/-notifications [![Join the chat at https://gitter.im/SpoonX/Dev](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SpoonX/Dev?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Loopback Gitter Chat [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/strongloop/loopback?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
