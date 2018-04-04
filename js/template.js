import getConstraint from './utils/constraint'

export default function (listing, screenRatio) {
  let resolutions = listing.preview.images[0].resolutions
  let images = resolutions.map(image => image.url)
  let imageRatio = resolutions[0].width / resolutions[0].height
  let constrain = getConstraint(screenRatio, imageRatio)
  let sizes = resolutions.map(image => `${image.url} ${image.width}w`).join(', ')
  return `
    <figure class="entry">
      <div class="entry--content">
        <img
          class="entry--image ${constrain} js-image"
          data-ratio="${imageRatio}"
          src="${images[3]}"
          srcset="${sizes}"
          alt="${listing.title}"
        >
        <figcaption class="entry--caption">
          <a class="entry--link" href="https://reddit.com${listing.permalink}" _target="blank">${listing.title}</a>
        </figcaption>
      </div>
    </figure>
  `
}
