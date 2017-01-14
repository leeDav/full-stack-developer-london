import Vue from 'vue'
import ButtonAdd from 'src/components/ButtonAdd'

describe('Adding a video to the playlist', () => {
  it('should have the default value of "add"', () => {
    expect(ButtonAdd.data)
      .to.be.a('function')

    expect(ButtonAdd.data().buttonText)
      .to.equal('Add')
  })

  it('should change button text to "Remove"', () => {
    const vm = new Vue(ButtonAdd)
    vm.toggleItemInPlaylist()
    expect(vm.buttonText)
      .to.equal('Remove')
  })

  it('should change button text back to "Add"', () => {
    const vm = new Vue(ButtonAdd)
    // Call the method twice, first to "Add" then to "Remove"
    vm.toggleItemInPlaylist()
    vm.toggleItemInPlaylist()

    expect(vm.buttonText)
      .to.equal('Add')
  })
})
