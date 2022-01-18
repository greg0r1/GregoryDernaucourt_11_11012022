import PropTypes from 'prop-types'
import './style.css'

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
