import rq from './utils/rq.js'
import {getConstraint, inView, $} from './utils/helpers.js'
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
  images = $('.js-image')
    .map(image => {
      return {
        node: image,
        ratio: parseFloat(image.getAttribute('data-ratio'))
      }
    })
  lazyLoad()
}

function updateConstraints (e) {
  ratio = window.innerWidth / window.innerHeight;
  images.forEach(image => {
    let constraint = getConstraint(ratio, image.ratio)
    image.node.classList = `entry--image ${constraint} js-image`
  })
}

function fadeIn (el) {
  if (el.target.classList && el.target.classList.contains('js-image')) {
    el.target.parentElement.parentElement.classList.remove('entry__unloaded')
  }
}

function lazyLoad () {
  // find all the unloaded entries
  $('.js-entry.entry__unloaded')
    .filter(inView)
    .forEach(el => {
      var image = el.querySelector('.js-image')
      image.srcset = image.getAttribute("data-srcset")
      image.src = image.getAttribute("data-src")
      image.addEventListener("load", fadeIn)
    })
}

window.addEventListener('resize', throttle(updateConstraints, 25))
window.addEventListener('scroll', throttle(lazyLoad, 200))
window.addEventListener('load', fadeIn)
