//@ts-check

import PropTypes from 'prop-types'
import './style.css'

/**
 *
 * @param {{tag: string}} props
 * @property {string} tag
 * @returns {React.ReactElement}
 */
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
