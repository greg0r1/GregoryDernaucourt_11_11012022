//@ts-check

import PropTypes from 'prop-types'
import './style.css'

/**
 * "Card" component that displays an image with text on it.
 * Used to display multiple items on a page.
 * @component
 * @param {{title: string, picture: string}} props
 * @property {string} title
 * @property {string} picture
 * @returns {React.ReactElement}
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
