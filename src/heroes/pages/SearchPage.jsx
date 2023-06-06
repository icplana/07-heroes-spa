import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { useState } from "react"
import { getHerosByName } from "../helpers"


export const SearchPage = () => {

  
  const navigate = useNavigate()

  const location = useLocation()

  // const query = queryString.parse( location.search )
  // console.log(query)

  const { q: searchValue = '' } = queryString.parse( location.search )

  const results = getHerosByName( searchValue ) 
  

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: ''
  })

  const onSearchSubmit = e => {
    e.preventDefault()

    if ( searchText.trim().length < 1 ) return
    
   

    navigate(`?q=${ searchText.toLowerCase().trim() }`)
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <form className="form-inline mt-2" onSubmit={ onSearchSubmit }>
            <input 
              className="form-control" 
              type="text" 
              placeholder="Search" 
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-success mt-2" type="submit">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className={`alert alert-primary ${(searchValue) ? 'd-none' :''}`}>Search a hero</div>

          <div className={`alert alert-danger ${(results.length === 0 ) ? '' :'d-none'}`}>No results for <b>{ searchValue }</b></div>

          <div className={`${(searchValue) ? '' :'d-none'}`}>
          {
            results.map( hero =>(
              <HeroCard key={ hero.id} hero={hero} />
            ))
          }      
          </div>
        </div>

      </div>
    </>
  )
}
