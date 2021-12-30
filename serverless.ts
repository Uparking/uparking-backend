import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'uparking-backend',
  frameworkVersion: '2',
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { 
    hello: {
      handler: 'src/functions/hello.handler',
      events: [
        {
          http: {
            path: '/hello',
            method: 'get',
            cors: true
          }
        }
      ]
    }
  },
  package: { individually: true },
  custom: {
    webpack:{
      webpackConfig: './webpack.config.js',
      includeModules: true
    },
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;