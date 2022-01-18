import HomeIllustration from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpeg'
import Section from '../../components/Section'
import Datas from '../../datas/index'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import './style.css'

function Home() {
  const datas = Datas.getAll()
  return (
    <div id="Home">
      <div className="homeContainer">
        <Section
          text="Chez vous, partout et ailleurs"
          picture={HomeIllustration}
        ></Section>
        <div className="galleryContainer">
          {datas.map((card, index) => (
            <Link
              key={`${card.id.toString()}-${index.toString()}`}
              to={`/HousingPage/${card.id}`}
            >
              <Card title={card.title} picture={card.cover} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
