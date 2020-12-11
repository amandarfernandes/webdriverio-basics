module.exports={
    browserName:'chrome',
    timeout:10000,
    logLevel: 'error',
    baseUrl: 'https://the-internet.herokuapp.com/',
    drivers: {
        chrome: { version: '87.0.4280.88' }, // https://chromedriver.chromium.org/
        firefox: { version: '0.27.0' }, // https://github.com/mozilla/geckodriver/releases
        chromiumedge: { version: '85.0.564.70' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
    }
}