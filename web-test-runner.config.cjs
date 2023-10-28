const { defaultReporter, summaryReporter } = require('@web/test-runner');
const { esbuildPlugin } = require('@web/dev-server-esbuild');
const { importMapsPlugin } = require('@web/dev-server-import-maps');

/** @type {import('@web/test-runner').TestRunnerConfig} */
const config = {
  coverageConfig: {
    include: ['index.ts']
  },
  files: ['index.test.ts'],
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true
    }),
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            assert: '/node_modules/@esm-bundle/chai/esm/chai.js'
          }
        }
      }
    })
  ],
  reporters: [
    summaryReporter(),
    defaultReporter({
      reportTestResults: true,
      reportTestProgress: true
    })
  ]
};

module.exports = config;
