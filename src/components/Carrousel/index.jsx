//@ts-check

import PropTypes from 'prop-types'
import './style.css'

/**
 *
 * @component
 * @param {{index: number, images: array, updateIndex: function }} props
 * @property {number} index
 * @property {array} images
 * @property {function} updateIndex
 * @returns {React.ReactElement}
 */
function Carrousel({ index, images, updateIndex }) {
  return (
    <div className="imageWrapper">
      <img
        className="carrousselImage"
        src={images[index]}
        alt=""
        height={200}
        width={200}
      />
      {images.length > 1 ? (
        <button
          className="leftButton"
          onClick={() =>
            updateIndex(() => {
              if (index === 0) {
                return images.length - 1
              } else {
                return index - 1
              }
            })
          }
        ></button>
      ) : null}

      {images.length > 1 ? (
        <button
          className="rightButton"
          onClick={() =>
            updateIndex(() => {
              if (index === images.length - 1) {
                return 0
              } else {
                return index + 1
              }
            })
          }
        ></button>
      ) : null}
    </div>
  )
}

Carrousel.propType = {
  index: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  updateIndex: PropTypes.func,
}

export default Carrousel
