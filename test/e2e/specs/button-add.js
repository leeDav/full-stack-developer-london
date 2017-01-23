module.exports = {
  'checking the add button': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.card .btn__action')
      .assert.containsText('.card .btn__action', 'Add to playlist')
      .click('.card .btn__action', function () {
        this.assert.containsText('.card .btn__action', 'Remove from playlist')
      })
      .click('.card .btn__action', function () {
        this.assert.containsText('.card .btn__action', 'Add to playlist')
      })
      .end()
  }
}
