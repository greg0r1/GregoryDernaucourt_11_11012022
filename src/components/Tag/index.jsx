import PropTypes from 'prop-types'
import './style.css'

function Tag({ tag }) {
  return (
    <div className="tagContainer" id={`tag-${tag}`}>
      <span>{tag}</span>
    </div>
  )
}

export default Tag

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
}
