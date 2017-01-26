import Vue from 'vue'
import App from 'src/App'

import moxios from 'moxios'

describe('try and load some data from somewhere', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('should be initialised correctly', () => {
    const VM = new Vue(App)
    expect(VM).to.not.be.undefined
  })

  it('should make the request and update the results variable', (done) => {
    moxios.stubRequest(App.data().API, {
      status: 200,
      responseText: {
        data: [
          { id: 1, name: 'Mexican keyboard cat' },
          { id: 2, name: 'Will it blend?' }
        ]
      }
    })

    const VM = new Vue(App)
    expect(VM.$data.results).to.have.length(0)

    VM.getData().then(() => {
      expect(VM.$data.results).to.be.an('array')
      expect(VM.$data.results).to.have.length(2)
    }).then(done, done)
  })

  it('should error if the status code is not 200', (done) => {
    moxios.stubRequest(App.data().API, {
      status: 500,
      responseText: {
        data: {}
      }
    })

    const VM = new Vue(App)
    expect(VM.$data.results).to.have.length(0)

    VM.getData().then(() => {
      expect(VM.$data.results).to.be.an('error')
    }).then(done, done)
  })
})
