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

![Screenshot of Oauth2 credentials form](/screenshots/oauth-credentials-modal.png")

Once these Oauth2 server details and credentials are supplied, all future GraphQL requests will automatically be authorized (i.e. the correct Authorization header will be added to requests).

GraphiQL will continue to work normally (making unauthenticated requests) if no Oauth2 credentials are supplied.
