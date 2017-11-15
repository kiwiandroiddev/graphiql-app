GraphiQL.app
------------

[![Build Status](https://travis-ci.org/skevy/graphiql-app.svg?branch=master)](https://travis-ci.org/skevy/graphiql-app)

A light, Electron-based wrapper around GraphiQL.

Provides a tabbed interface for editing and testing GraphQL queries/mutations with GraphiQL.

#### Getting started developing

- Branch and/or clone the repo locally.
- cd into it
- install all the require packages: `npm i`
- build the project: `npm run build`
- start the project: `npm start`

#### Fork notes

This fork adds OAuth2 Password grant support to the app (backed by [simple-oauth2](https://github.com/lelylan/simple-oauth2)).

It adds a new button and form for you to supply:

- Token Host (e.g. `https://oauthtokenserver.com`)
- Token Path (e.g. `oauth/token`)
- Client ID
- Client secret
- Username
- Password

After which all GraphQL requests will include an Authorization header with the
access token returned from authenticating with the given credentials.

If no Oauth2 credentials are given, requests will default to be unauthenticated.
