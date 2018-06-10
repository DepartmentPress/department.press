export default function (listing, screenRatio) {
  let images = listing.images
    .map(image => image.fields)
  return `
    <figure class="entry entry__unloaded js-entry">
      <div class="entry--content">
        <img
          class="entry--image constrain-${listing.constrain} js-image"
          src="${images[0].file.url}"
          alt="${listing.title}"
        >
        <figcaption class="entry--caption">
          <em>${listing.title}</em>, ${listing.year}
          <br />${listing.description} Edition of ${listing.editionSize}
        </figcaption>
      </div>
    </figure>
  `
}

// let resolutions = listing.images[0].resolutions
// let images = resolutions.map(image => image.url)
// let imageRatio = resolutions[0].width / resolutions[0].height
// let constrain = getConstraint(screenRatio, imageRatio)
// let sizes = resolutions.map(image => `${image.url} ${image.width}w`).join(', ')
// data-ratio="${imageRatio}"
// data-src="${images[0]}"
// data-srcset="${sizes}"