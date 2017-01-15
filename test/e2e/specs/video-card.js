module.exports = {
  'default e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.card')
      .assert.elementCount('img', 1)
      .assert.containsText('span.card__info-large', 'Jane Doe')
      .assert.containsText('span.card__info-small', 'Lorem ipsum dolor salat. On the wings of an eagle')
      .end()
  }
}
