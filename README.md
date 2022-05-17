# portfolio
## This is source code of my it portfolio.
You can use in for your cv or portfolio.
### list of dependences:
#### Webpack
> npm init
*Ask the questions and create the project*

> npm install -D webpack webpack-cli
*install webpack (-D Developer mode, save devDependenses)*

> npm install -D html-webpack-plugin
*create html and add scripts to index.html*

> npm install -D clean-webpack-plugin
*clean build folder*

> npm install -D style-loader css-loader
*generate css as style teg in index.html*

#### Serverless
> npm install serverless@^3.17.0
*framework for easy deploy in AWS*

> serverless plugin install -n serverless-finch
*plugin for uploading build to aws s3 bucket*

> npm install --save-dev https://github.com/jonathanconway/serverless-single-page-app-plugin
*plugin for creating cloudfront environment and invalidation distribution*