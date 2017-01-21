module.exports = {
  'default e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.card')
      .assert.elementPresent('img')
      .assert.visible('.card__info-large')
      .assert.visible('.card__info-small')
      .end()
  }
}
