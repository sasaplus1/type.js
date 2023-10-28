const { defaultReporter, summaryReporter } = require('@web/test-runner');
const { esbuildPlugin } = require('@web/dev-server-esbuild');

/** @type {import('@web/test-runner').TestRunnerConfig} */
const config = {
  coverageConfig: {
    include: ['packages/**/*.ts']
  },
  files: ['packages/**/*.test.ts'],
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true
    }),
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
