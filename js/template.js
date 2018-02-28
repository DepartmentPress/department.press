export default function (listing) {
  var resolutions = listing.preview.images[0].resolutions
  var images = resolutions.map(image => image.url)
  var landscape = resolutions[0].width >= resolutions[0].height
  return `
    <div class="entry">
      <picture class="entry--image ${landscape ? "entry--image__landscape" : "entry--image__portrait"}">
        <source media="(min-width: 320px)" srcset="${images[2]}, ${images[3]} 2x">
        <source media="(min-width: 640px)" srcset="${images[3]}, ${images[5]} 2x">
        <source media="(min-width: 960px)" srcset="${images[5]}">
        <img src="${images[3]}" srcset="${images[4]} 2x" alt="listing">
      </picture>
    </div>
  `
}
