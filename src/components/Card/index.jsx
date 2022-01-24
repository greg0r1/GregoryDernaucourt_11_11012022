import PropTypes from 'prop-types'
import './style.css'

/**
 * The "card" component displays an image and a title on it
 * @version 1.0.0
 * @param {string} { title, picture }
 * @returns {HTMLModElement}
 * @visibleName Card component (thumb in Figma)
 */
function Card({ title, picture }) {
  return (
    <div className="cardWrapper">
      <span className="cardTitle">{title}</span>
      <img
        className="cardImage"
        src={picture}
        alt={title}
        height={300}
        width={300}
      />
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
}

export default Card
