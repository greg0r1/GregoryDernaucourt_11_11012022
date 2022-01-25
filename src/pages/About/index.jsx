//@ts-nocheck

import Section from '../../components/Section'
import AboutIllustration from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.webp'
import DropdownLarge from '../../components/DropdownLarge'
import './style.css'

/**
 * "About" page
 *
 * @returns {React.ReactElement}
 */
function About() {
  return (
    <div id="About">
      <div className="aboutContainer">
        <Section text="" picture={AboutIllustration}></Section>
        <div className="dropdownsContainer">
          <DropdownLarge
            title="Fiabilité"
            content={[
              'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
            ]}
          ></DropdownLarge>
          <DropdownLarge
            title="Respect"
            content={[
              'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
            ]}
          ></DropdownLarge>
          <DropdownLarge
            title="Service"
            content={[
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
            ]}
          ></DropdownLarge>
          <DropdownLarge
            title="Sécurité"
            content={[
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
            ]}
          ></DropdownLarge>
        </div>
      </div>
    </div>
  )
}

export default About
