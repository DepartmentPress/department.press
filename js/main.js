import rq from './utils/rq.js'
import getConstraint from './utils/constraint.js'
import template from './template.js'
import throttle from 'lodash.throttle'

let ratio = window.innerWidth / window.innerHeight
let wrapper = document.querySelector('.js-photo-wrap')
let images = []

rq.get('https://www.reddit.com/r/analog.json')
  .then(render)
  .catch(error => console.error.bind(console))

function render (response) {
  wrapper.innerHTML = response.data.children
    .map(listing => listing.data)
    .filter(listing => listing.preview && listing.domain === 'i.redd.it')
    .filter(listing => listing.preview.images[0].resolutions.length > 5)
    .map(listing => template(listing, ratio))
    .join("")
  images = Array.prototype.slice.call(document.querySelectorAll('.js-image'))
    .map(image => {
      return {
        node: image,
        ratio: parseFloat(image.getAttribute('data-ratio'))
      }
    })
}

function updateConstraints (e) {
  ratio = window.innerWidth / window.innerHeight;
  images.forEach(image => {
    let constraint = getConstraint(ratio, image.ratio)
    image.node.classList = `entry--image ${constraint} js-image`
  })
}

window.addEventListener('resize', throttle(updateConstraints, 25));
