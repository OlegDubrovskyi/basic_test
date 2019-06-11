const { SpecReporter } = require('jasmine-spec-reporter');

var HtmlScreenshotReporter = require('./node_modules/protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'Envision-Application-Protractor-Report.html'
});

exports.config = {
    baseUrl: 'https://www.ng-book.com/',

    capabilities: {
        browserName: 'chrome',
    },

    specs: './*.ts',

    framework: 'jasmine',
    allScriptsTimeout: 140000,
    getPageTimeout: 140000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
    },

    onPrepare: function () {
        require('ts-node').register({
            project: 'tsconfig.json'
        });
        const chai = require('chai');
        const chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: function(exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};
