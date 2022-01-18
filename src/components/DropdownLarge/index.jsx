import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.css'

function DropdownLarge({ title, content }) {
  const [display, updateDisplay] = useState('none')

  const toggleContent = (display) => {
    if (display === 'block') {
      return 'none'
    } else {
      return 'block'
    }
  }

  return (
    <div className="dropdownLargeContainer">
      <div
        className="titleContainer"
        onClick={
          content.length > 0
            ? () => updateDisplay(toggleContent(display))
            : null
        }
      >
        <span>{title}</span>
        <span
          className="arrowStyled"
          style={
            display === 'block'
              ? { transform: `rotate(270deg)` }
              : { transform: `rotate(90deg)` }
          }
        ></span>
      </div>
      <div className="contentContainer" style={{ display: `${display}` }}>
        {content.map((line, index) => {
          return <p key={`dp-${index.toString()}`}>{`${line}`}</p>
        })}
      </div>
    </div>
  )
}

DropdownLarge.prototype = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
}

export default DropdownLarge
