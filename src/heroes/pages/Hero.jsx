import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from "react"

export const Hero = () => {

  const { heroId } = useParams() 
 
  const actualHero = useMemo( () => getHeroById( heroId ), [ heroId ] )

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  
  if ( !actualHero ){
    return <Navigate to="/dc" />
  }


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src= { `/heroes/${ heroId }.jpg` }
          alt={ actualHero.superhero } 
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ actualHero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { actualHero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> { actualHero.publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> { actualHero.first_appearance}</li>
        </ul>


        <h5 className=" mt3">Characters</h5>
        <p>{ actualHero.characters }</p>


        <button
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >Regresar</button>
      </div>


    </div>
  )
}
