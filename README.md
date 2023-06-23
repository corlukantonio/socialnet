# socialnet

[![Build Status](https://app.travis-ci.com/corlukantonio/socialnet.svg?branch=master)](https://app.travis-ci.com/corlukantonio/socialnet)
[![Coverage Status](https://coveralls.io/repos/github/corlukantonio/socialnet/badge.svg?branch=master)](https://coveralls.io/github/corlukantonio/socialnet?branch=master)

## Description

**Socialnet** is the name of the project created as a simple software solution for my graduate work. The main purpose of the application is to create your own profile and find profiles of others. One of the functionalities that defines this social network as such is the ability to share text content with other users.

Repository is divided into two parts:

- [**Server**](https://github.com/corlukantonio/socialnet) - web services (Node.js, Express),
- [**Client**](https://github.com/corlukantonio/socialnet/tree/master/client) - graphical display of data (React, Redux).

## How to run it?

Before you start doing any of the following, make sure you have [**Node.js**](https://nodejs.org) installed either on your computer or the server on which you're going to run the application. You can easily check if you have it installed by executing:

```properties
node -h
```

### Installing node modules

When done with git repository cloning, navigate to the socialnet and run next command to install **node modules** on the server:

```properties
npm install
```

After installing node modules on the server, navigate to client:

```properties
cd client/
```

Again, repeat the same to install **node modules** on the client:

```properties
npm install
```

### And finally, run it!

Navigate to the socialnet, and start the web application by typing:

```properties
npm run dev
```
