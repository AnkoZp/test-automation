module.exports = {
    default: {
        require: [
            'features/step-definitions/**/*.ts',
            'cucumber.config.ts'
        ],
        requireModule: ['ts-node/register'],
        format: [
            'progress-bar',
            '@cucumber/pretty-formatter',
            'json:reports/cucumber_report.json',
            'html:reports/cucumber_report.html'
        ],
        formatOptions: {
            snippetInterface: 'async-await'
        },
        paths: ['features/**/*.feature'],
        publishQuiet: true
    },
    local: {
        require: [
            'features/step-definitions/**/*.ts',
            'cucumber.config.ts'
        ],
        requireModule: ['ts-node/register'],
        format: [
            'progress-bar',
            '@cucumber/pretty-formatter'
        ],
        formatOptions: {
            snippetInterface: 'async-await'
        },
        paths: ['features/**/*.feature'],
        publishQuiet: true
    }
};
