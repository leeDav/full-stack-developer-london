module.exports = {
  'main app is created': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.card', 5000)
      .assert.elementPresent('.card')
      .end()
  }
}
