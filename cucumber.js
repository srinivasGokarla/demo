// cucumber.js  (replace file)
module.exports = {
  default: {
    require: [
      'tests/support/world.js',
      'tests/support/hooks.js',
      'tests/steps/**/*.js'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json',
      'junit:reports/junit.xml',
      'html:reports/cucumber-report.html'
    ],
    publishQuiet: true,
    paths: [
      'tests/features/**/*.feature'
    ]
  }
};
