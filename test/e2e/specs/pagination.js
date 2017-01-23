module.exports = {
  'check pagination is working': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.pagination__container')
      .assert.containsText('.pagination__container > li.number.active', '1')
      .assert.containsText('.card__info-large > a', 'L3f0u')
      .click('.pagination__container > li.number:not(.active)', function (response) {
        this.assert.containsText('.card__info-large > a', 'Special Problems')
        this.assert.ok(typeof response === 'object')
      })
      .end()
  }
}
