import { heroes } from "../data/heroes"


export const getHerosByName = ( name ) => {

    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name.trim().toLowerCase()) )
}

