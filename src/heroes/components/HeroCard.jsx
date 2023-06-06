import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {

  
    const { superhero, alter_ego, first_appearance, id, characters } = hero
    return (
      <div className="cardBox card p-2 mb-2">
        <img src={`heroes/${id}.jpg`} className="animate__animated animate__fadeIn imgCard mx-auto" alt={ superhero } />
        <h3>{ superhero }</h3>
        <h5>{ alter_ego }</h5>
        <h5>{ (alter_ego !== characters) && characters  }</h5>
        <p>{ first_appearance }</p>
       
        <Link
         to={`/hero/${ id }`}
         className="btn btn-secondary mt-auto"
        >Más información...</Link>
      </div>
    )
  }
  