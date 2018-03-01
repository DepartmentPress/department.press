export default function (listing) {
  var resolutions = listing.preview.images[0].resolutions
  var images = resolutions.map(image => image.url)
  var landscape = resolutions[0].width >= resolutions[0].height
  var sizes = resolutions.map(image => `${image.url} ${image.width}w`).join(', ')
  return `
    <div class="entry">
      <img
        class="entry--image ${landscape ? "entry--image__landscape" : "entry--image__portrait"}"
        src="${images[3]}" srcset="${sizes}"
        alt="listing"
      >
    </div>
  `
}
