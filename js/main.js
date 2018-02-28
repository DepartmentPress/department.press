import rq from './rq.js'
import template from './template.js'

rq.get("http://www.reddit.com/r/analog.json")
  .then(render)
  .catch(error => {
    console.error(error)
  })

function render (response) {
  var wrapper = document.querySelector('.js-photo-wrap')
  wrapper.innerHTML = ""
  response.data.children
    .map(listing => listing.data)
    .filter(listing => listing.preview && listing.domain === 'i.redd.it')
    .filter(listing => listing.preview.images[0].resolutions.length > 5)
    .forEach(listing => {
      console.log(listing.preview.images)
      var largestPreviewUrl = listing.preview.images[0].resolutions[0].url
      wrapper.innerHTML += template(listing)
    })
}
