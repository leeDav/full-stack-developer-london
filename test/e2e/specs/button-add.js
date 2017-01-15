module.exports = {
  'default e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.card .btn__action')
      .assert.containsText('.card .btn__action', 'Add')
      .end()
  }
}
