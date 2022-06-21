import express from "express";
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

const app: express.Application = express()

const swaggerYAML = YAML.load(__dirname + '/swagger/swagger.yaml')

app.set('port', process.env.PORT)

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerYAML))

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'));
})
