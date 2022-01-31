//@ts-check

import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpeg'
import './style.css'

/**
 * Display an image on the top of a page
 * @component
 * @param {{text: string, picture: string|*}} props
 * @property {string} text
 * @property {string|*} picture
 * @returns {React.ReactElement}
 */
function Section({ text, picture }) {
  return (
    <section id="section" className="sectionWrapper">
      <img
        className="sectionImage"
        src={picture}
        alt="This is an illustration"
        data-test-id="sectionImage"
        height={200}
        width={500}
      />
      <p className="sectionText">{text}</p>
    </section>
  )
}

Section.propTypes = {
  text: PropTypes.string,
  picture: PropTypes.string.isRequired,
}

Section.defaultProps = {
  text: '',
  picture: DefaultPicture,
}

export default Section
