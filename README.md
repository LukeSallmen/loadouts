# Loadouts

Loadouts aims to be the place for people to organize, filter, find, and share their gear setups with the world.

## Status 

Current status: limited functionality. UI mostly works but JSON datastore functions need updated. Haven't made much of the site dynamic.  


## Building: 
Requires npm. (assumes linux)

In the directory / folder of your choice, run:
```
git clone https://github.com/LukeSallmen/loadouts.git
```

Then, to install the required dependencies: 

```
npm install
```

To start the server:

```
cd src/loadouts_server
nodemon server.js
```

To start the UI:

```
cd ../loadouts_ui
vue-cli-service serve
```