const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    baseUrl: 'https://www.ng-book.com/',

    capabilities: {
        browserName: 'chrome',
    },

    specs: './e2e/features/*.ts',

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
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(true);
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
};
