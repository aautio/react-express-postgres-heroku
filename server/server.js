require('dotenv').config()

const express = require('express')
const morgan = require('morgan')

const api = require('./api')

const app = express()

/*
* Log failed requests to stderr
*/
app.use(
  morgan('tiny', {
    skip: (req, res) => res.statusCode < 400,
    stream: process.stderr
  })
)

/*
* Log successful requests to stderr
*/
app.use(
  morgan('tiny', {
    skip: (req, res) => res.statusCode >= 400,
    stream: process.stdout
  })
)

/*
 * Ignore HTTP'ed requests if running in Heroku. Use HTTPS only.
 */
if (process.env.DYNO) {
  app.enable('trust proxy')
  app.use((req, res, next) => {
    if (!req.secure) {
      if (req.path === '/') {
        res.redirect(301, `https://${req.host}/`)
      } else {
        res.status(400).end('Please switch to HTTPS.')
      }
    } else {
      return next()
    }
  })
}

/*
 * Hook up all apis defined in /api
 */
app.use(api)

/*
 * In production mode we will also serve the react-ui
 */
if (process.env.NODE_ENV === 'production') {
  console.log(`Production mode detected: Serving react-ui`)
  const path = require('path')

  const buildDir = path.join(__dirname, '../react-ui/build')

  app.use(express.static(buildDir))

  app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'))
  })
}

/*
 * Migrate database before listening for requests
 */
const postgrator = require('postgrator')
const { connectionString } = require('./lib/database')

postgrator.setConfig({
  migrationDirectory: __dirname + '/postgrator',
  driver: 'pg',
  connectionString
})

postgrator.migrate('max', (err, migrations) => {
  if (err) {
    console.error('Database migration failed!')
    console.error(err)
    process.exit(1)
  }

  postgrator.endConnection(() => {
    console.log('Database migrated successfully.')

    /*
     * Database has been migrated, all is good to go!
     */
    const port = process.env.PORT || 4000
    app.listen(port, () => {
      console.log(`Server listening at ${port}`)
    })
  })
})
