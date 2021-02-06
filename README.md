# socialnet

[![Build Status](https://travis-ci.org/corlukantonio/socialnet.svg?branch=master)](https://travis-ci.org/corlukantonio/socialnet)

## Description

"Socialnet" is the name of the project created as a simple software solution for my graduate work. The main purpose of the application is to create your own profile and find profiles of others. One of the functionalities that defines this social network as such is the ability to share text content with other users.

Repository is divided into two parts:

- [**Server**](https://github.com/corlukantonio/socialnet) - web services (Node.js, Express),
- [**Client**](https://github.com/corlukantonio/socialnet/tree/master/client) - graphical display of data (React, Redux).

## How to run it?

Before you start doing any of the following, make sure you have [**Node.js**](https://nodejs.org) installed either on your computer or the server on which you're going to run the application.

### Installing node modules

When done with git repository cloning, navigate to the socialnet and run next command to install **node modules** on the server:

```
$ npm install
```

After installing node modules on the server, navigate to client:

```
$ cd client/
```

Again, repeat the same to install **node modules** on the client:

```
$ npm install
```

### And finally, run it!

Navigate to the socialnet, and start the web application by typing:

```
$ npm run dev
```
