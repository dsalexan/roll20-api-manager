const driver = require('./driver')
const { Builder, By, until } = require('selenium-webdriver')

driver.get('https://roll20.net')

const elements = {
  menuSignIn: 'menu-signin',
  inputEmail: 'input_login-email',
  inputPassword: 'input_login-password',
}

driver.wait(until.elementLocated(By.id(elements.menuSignIn)))
driver.findElement(By.id(elements.menuSignIn)).click()

driver.wait(until.elementLocated(By.id(elements.inputEmail)))

// // wait and find a specific element with it's id
// this.findById = async function(id) {
//   await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
//   return await this.driver.findElement(By.id(id));
// };

// // wait and find a specific element with it's name
// this.findByName = async function(name) {
//   await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
//   return await this.driver.findElement(By.name(name));
// };

// // fill input web elements
// this.write = async function (el, txt) {
//   return await el.sendKeys(txt);
// };

// driver.quit()
