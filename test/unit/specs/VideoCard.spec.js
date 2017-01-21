import Vue from 'vue'
import VideoCard from 'src/components/VideoCard'

describe('Displaying a video card', () => {
  it('should select an appropriately sized image; not too big, not too small', () => {
    const images = [
      {'width': 100, 'height': 50, 'link': 'small.jpg'},
      {'width': 500, 'height': 300, 'link': 'medium.jpg'},
      {'width': 800, 'height': 600, 'link': 'large.jpg'}
    ]

    const VM = new Vue(VideoCard)

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

    const VM = new Vue(VideoCard)
    // Get a ridicuously big image
    let imageFound = VM.getImageBySize(images, 2000, 1500)
    // Get the index position of the last image in the array
    let imageIndex = images.length - 1
    expect(imageFound).to.equal(images[imageIndex].link)
  })
})
