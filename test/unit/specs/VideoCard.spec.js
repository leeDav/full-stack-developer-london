import Vue from 'vue'
import VideoCard from 'src/components/VideoCard'

describe('Displaying a video card', () => {
  beforeEach(function () {
    window.localStorage.clear()
  })

  it('should get the props data, else it gets the hose again', () => {
    let Instance = Vue.extend(VideoCard)
    const VM = new Instance({
      propsData: {
        info: ''
      }
    })

    let mockImages = { 'resource_key': 'ABCD1234' }

    expect(VM.$data.video).to.equal('')
    expect(VM.setButtonText(mockImages.resource_key))
            .to.equal(VM.$data.buttonText_add)
  })

  it('should begin with an empty localStorage', () => {
    let Instance = Vue.extend(VideoCard)
    const VM = new Instance({
      propsData: {
        info: ''
      }
    })
    expect(window.localStorage.getItem(VM.$data.localStore)).to.be.null
  })

  it('should add and remove from localStorage', () => {
    let Instance = Vue.extend(VideoCard)
    const VM = new Instance({
      propsData: {
        info: {
          resource_key: ''
        }
      }
    })

    let mockImages = { 'resource_key': 'ABCD1234' }
    expect(VM.setButtonText(mockImages.resource_key)).to.equal(VM.$data.buttonText_add)

    VM.togglePlaylistEntry(mockImages.resource_key)
    expect(VM.isInPlaylist(mockImages.resource_key)).to.be.true
    expect(VM.setButtonText(mockImages.resource_key)).to.equal(VM.$data.buttonText_remove)

    VM.togglePlaylistEntry(mockImages.resource_key)
    expect(VM.isInPlaylist(mockImages.resource_key)).to.be.false
    expect(VM.setButtonText(mockImages.resource_key)).to.equal(VM.$data.buttonText_add)
  })

  it('should select an appropriately sized image; not too big, not too small', () => {
    const images = [
      {'width': 100, 'height': 50, 'link': 'small.jpg'},
      {'width': 500, 'height': 300, 'link': 'medium.jpg'},
      {'width': 800, 'height': 600, 'link': 'large.jpg'}
    ]

    let Instance = Vue.extend(VideoCard)
    const VM = new Instance({
      propsData: {
        info: ''
      }
    })

    expect(VM.getImageBySize(images, 100, 50)).to.equal('small.jpg')
    expect(VM.getImageBySize(images, 500, 300)).to.equal('medium.jpg')
    expect(VM.getImageBySize(images, 800, 600)).to.equal('large.jpg')
    expect(VM.getImageBySize(images, 1800, 1600)).to.equal('large.jpg')
  })

  it('should return the last image if no image matches the criteria', () => {
    const images = [
      {'width': 100, 'height': 50, 'link': 'small.jpg'},
      {'width': 500, 'height': 300, 'link': 'medium.jpg'},
      {'width': 800, 'height': 600, 'link': 'large.jpg'}
    ]

    let Instance = Vue.extend(VideoCard)
    const VM = new Instance({
      propsData: {
        info: ''
      }
    })

    // Get a ridicuously big image
    let imageFound = VM.getImageBySize(images, 2000, 1500)
    // Get the index position of the last image in the array
    let imageIndex = images.length - 1
    expect(imageFound).to.equal(images[imageIndex].link)
  })
})
