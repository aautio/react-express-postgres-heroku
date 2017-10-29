A boilerplate for React with Express API and Postgres backends for easy development and Heroku deployments.

You can see the boilerplate in action at https://react-express-postgres.herokuapp.com/

## What is included

- NPM scripts for local development and [Heroku](https://devcenter.heroku.com/categories/nodejs) deployments 
- [Create React App](https://github.com/facebookincubator/create-react-app]) in folder `react-ui`
- [Express](https://expressjs.com/) API backend with request [logging](https://github.com/expressjs/morgan) in folder `server`
- Postgres database access with [pg-promise](https://github.com/vitaly-t/pg-promise)
- Database setup and migration with [postgrator](https://github.com/rickbergfalk/postgrator)
- HTTPS only when deployed to Heroku

## Local development

Figure out your [connection string](https://github.com/iceddev/pg-connection-string) to your postgres instance. You'll need it at step `4`. Check https://postgresapp.com/ if you want to install Postgres to your Mac. 

1. `git clone https://github.com/aautio/react-express-postgres-heroku.git`
2. `cd react-express-postgres-heroku`
3. `npm install`
4. `echo DATABASE_URL=postgres://someuser:somepassword@127.0.0.1:5432/somedatabase >> server/.env`  
5. `npm run start:dev`

Now you have the Create React App -app running in `http://localhost:3000/` and the API server running in `http://localhost:4000`. 

CRA has a fabulous built-in live reload. Go and check their [readme](https://github.com/facebookincubator/create-react-app). The API server is reloading all changes with [nodemon](https://nodemon.io/). Whenever the server starts, it executes sql migrations from `server/postgrator` with [Postgrator](https://github.com/rickbergfalk/postgrator).

The CRA is proxying requests to API server. Check the `proxy` config from `react-ui/package.json` and the relevant [section in readme](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development).


## Heroku deployments

1. `heroku create name-for-your-app`
2. `heroku addons:create heroku-postgresql:hobby-dev`
3. `heroku git:remote name-for-your-app`
4. `git push heroku master`

Now you have the software running in `https://name-for-your-app.herokuapps.com/`. It is running in production mode. Open your browser and check the logs with `heroku logs`.

Your database has been initialized by running sql migrations from `server/postgrator`.
