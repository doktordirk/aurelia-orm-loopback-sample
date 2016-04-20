# Aurelia-orm-loopback-sample

[![Join the chat at https://gitter.im/SpoonX/Dev](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SpoonX/Dev?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

**Aurelia client included as [ES6-SystemJs](/client), [ES6-Webpack](/client-wp) and [Typescript-SystemJs](/client-ts) versions**

This is a skeleton for an [Aurelia](http://aurelia.io/) client using [aurelia-orm](https://github.com/SpoonX/aurelia-orm) for rest access to a [Strongloop](http://loopback.io/) loopback api server.

## Installation instructions

### For ES6-SystemJs:

```sh
git clone https://github.com/dirkeisinger/aurelia-orm-loopback-sample
cd aurelia-orm-loopback-sample
npm install
cd client
npm install
jspm install
```

To run the sample type in the client folder:

```sh
gulp watch
```

This builds the aurelia-client and serves client and api.


### For Typescript-SystemJs:

- use client-ts

### For ES6-Webpack:

- use client-wp
- no 'jspm install' naturally
- run with `npm start`


## What's in it

### Loopback server

#### [/server](/server)

A [loopback](https://docs.strongloop.com/display/public/LB/LoopBack) api server. A local file is used as database. Have a peek at [mydata.json](mydata.json) to gain some insight.

#### [/common](/common)

The customer model with firstName and lastName properties.

### Aurelia client

#### [/client](/client) [/client-ts](/client-ts)  [/client-wp](/client-wp)

An aurelia client app using aurelia-orm for customer management (with default endpoint, repository and entity).

## Support

- Aurelia Gitter chat [![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Spoonx/Dev Gitter Chat for aurelia-api/-authentication/-orm/-notifications [![Join the chat at https://gitter.im/SpoonX/Dev](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SpoonX/Dev?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Loopback Gitter Chat [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/strongloop/loopback?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
