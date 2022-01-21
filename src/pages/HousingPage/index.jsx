import { useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Datas from '../../datas'
import Tag from '../../components/Tag'
import Carrousel from '../../components/Carrousel'
import DropdownLarge from '../../components/DropdownLarge'
import './style.css'

function HousingPage() {
  const { cardId } = useParams()
  const card = Datas.getCard(cardId)
  const [index, updateIndex] = useState(0)

  if (card === undefined) {
    return <Navigate to={'/404'}></Navigate>
  } else {
    return (
      <div className="housingPageWrapper">
        <Carrousel
          index={index}
          updateIndex={updateIndex}
          images={card.pictures}
        />
        <div className="infosContainer">
          <div className="infosWrapper">
            <h2 className="infosContainer_title">{card.title}</h2>
            <p>{card.location}</p>
            <div className="tagsWrapper">
              {card.tags.map((tag, index) => (
                <Tag key={`${index.toString()}`} tag={tag} />
              ))}
            </div>
          </div>
          <div className="profileContainer">
            <div className="profile">
              <div className="profile_name">
                <span>{card.host.name.split(' ').slice(0, 1)}</span>
                <span>{card.host.name.split(' ').slice(1)}</span>
              </div>
              <img
                className="profile_image"
                src={`${card.host.picture}`}
                alt=""
              />
            </div>
            <div className="rating">
              {[...Array(Number(card.rating))].map((star, index) => {
                return (
                  <div
                    key={`${index.toString()}`}
                    className="red_star star_rating"
                  ></div>
                )
              })}
              {[...Array(Number(5 - card.rating))].map((star, index) => {
                return (
                  <div
                    key={`${index.toString()}`}
                    className="grey_star star_rating"
                    alt=""
                  ></div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="dropdownLargeWrapper">
          <DropdownLarge
            title="Description"
            content={[card.description]}
          ></DropdownLarge>
          <DropdownLarge
            title="Équipements"
            content={card.equipments}
          ></DropdownLarge>
        </div>
      </div>
    )
  }
}

export default HousingPage
