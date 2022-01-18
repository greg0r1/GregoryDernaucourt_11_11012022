import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpeg'
import './style.css'

function Section({ text, picture }) {
  return (
    <div id="section" className="sectionWrapper">
      <img
        className="sectionImage"
        src={picture}
        alt={picture.split(/\\/g)}
        data-test-id="sectionImage"
        height={200}
        width={500}
      />
      <p className="sectionText">{text}</p>
    </div>
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
