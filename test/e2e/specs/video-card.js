module.exports = {
  'a video card is created': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('img')
      .assert.visible('.card__info-large')
      .assert.visible('.card__info-small')
      .assert.attributeContains('.card__bg', 'style', '.jpg')
      .end()
  }
}
