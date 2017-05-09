This is exaple of serverless lambda function that is written with typescript and supports offline, local development.

### Install

To install it (assuming you have serverless configured with AWS):

`yarn install`

### For local development:

`yarn run dev`

Your lambda should be avaliable on `http://localhost:3000` - and example function: `http://localhost:3000/hello`

### For deployment:

`yarn run deploy`


TODO (PR's are welcome!):
 - Make it testable and add test example
 - When webpack 2 support will be added to `serverless-webpack` - modify config file
