
function getConstraint (screenRatio, imageRatio) {
  return imageRatio > screenRatio ? "constrain-x" : "constrain-y"
}

export default getConstraint
