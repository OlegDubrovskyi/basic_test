const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    baseUrl: 'https://www.ng-book.com',

    capabilities: {
        browserName: 'chrome',
    },

    specs: './integration/*.ts',

    framework: 'jasmine',
    allScriptsTimeout: 140000,
    getPageTimeout: 140000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
    },

    localSeleniumStandaloneOpts: {
        loopback: true
    },

    onPrepare: function () {
        require('ts-node').register({
            project: 'tsconfig.json'
        });
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    },
};
