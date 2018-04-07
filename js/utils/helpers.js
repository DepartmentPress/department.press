/**
 * Given an image ratio and screen ratio, determine which axis to constrain
 * @param {Float} screenRatio w/h ratio of screen as float
 * @param {Float} imageRatio  w/h ratio of image as float
 * @returns {String} "constrain-x" || "constrain-y"
 */
function getConstraint (screenRatio, imageRatio) {
  return imageRatio > screenRatio ? "constrain-x" : "constrain-y"
}

/**
 * Given an entry element, determine if it is in the viewport
 * @param {Object} image  DOM node of entry element
 * @returns {Boolean}
 */
function inView (el) {
  var isInView = el.getBoundingClientRect().top <= window.innerHeight * 2
  return isInView && el
}

/**
 * Get an array of elements from a CSS selector
 * @param   {String} selector  CSS selector
 * @returns {Array}
 */
function $ (selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector))
}

export {getConstraint, inView, $}
