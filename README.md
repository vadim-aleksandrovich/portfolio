# portfolio
## This is source code of my it portfolio.
You can use in for your cv or portfolio.
### list of dependences:
#### Webpack
> npm init
*Ask the questions and create the project*

> npm i -D webpack webpack-cli
*install webpack (-D Developer mode, save devDependenses)*

> npm i -D html-webpack-plugin
*create html and add scripts to index.html*

> npm i -D clean-webpack-plugin
*clean build folder*

> npm i -D style-loader css-loader
*generate css as style teg in index.html*

> npm i -D webpack-dev-server
*dev server for checking changes and show them in browser immideatly*

> npm i -D copy-webpack-plugin
*Copy static files to buid*

>npm i -D mini-css-extract-plugin

>npm i -D cross-env

>npm i -D terser-webpack-plugin
*Minimise js*

>npm i -D css-minimizer-webpack-plugin

>npm i -D sass-loader sass webpack

>npm i -D node-sass
#### Serverless
> npm i serverless@^3.17.0
*framework for easy deploy in AWS*

> serverless plugin install -n serverless-finch
*plugin for uploading build to aws s3 bucket*

> npm i -D https://github.com/jonathanconway/serverless-single-page-app-plugin
*plugin for creating cloudfront environment and invalidation distribution*