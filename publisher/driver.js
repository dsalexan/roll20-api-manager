const { Builder } = require('selenium-webdriver')

const chrome = require('selenium-webdriver/chrome')

const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

let o = new chrome.Options()
// o.addArguments('start-fullscreen');
o.addArguments('disable-infobars')
o.addArguments('start-maximized')
// o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false })

const driver = new Builder().setChromeOptions(o).forBrowser('chrome').build()

module.exports = driver
