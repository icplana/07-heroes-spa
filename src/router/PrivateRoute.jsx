import { useContext, useEffect } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext)


    //Desde Aquí
    const { pathname , search } = useLocation() 
    const lastPath = pathname + search
    useEffect(() => {
        localStorage.setItem('lastPath', lastPath )       
    }, [ lastPath ])
    //Hasta aquí, sirve para conservar la ultima ruta usada y en caso de hacer un log out log in poder recuperar el ultimo punto donde esatava el user, usamos useEffect para evitar calls innecesarios a localStorage, tmab podriamos usar un useMemo()
    



    // punt clau per protegir rutes privades, hi ha molts components que participen en fer una ruta privada:
    // els nombren desde el més propaer a l'arrel (o main) fins als descedents més inferios:
    // tenim el main utilitzant el component browserRouter de react-router-dom, basicament serveix per donar un entorn on recolzar contexts
    // a continuació tenim un HeroesApp, basicament es el component arrel de la nostra app, esta englobat pel context Authcontext, que permet que en qualsevol punt de la app podem accedir a les funciones y les dades de l'autentificació (per part del frontend)
    // Despres segueix el AppRouter aquí ens trobem ja amb la primera bifuracio entre rutes privades y publiques, tenim separada la ruta login de qualsevol altra ruta, la ruta login ens enviara al component LoginPage que nomes serveix per fer un log in, en cas de entrar en qualsevol altra ruta ens envia al component privateRoute, aquets component es qui conte la regulació o condició de les rutes privades.
    //component PrivateRoutes - es el component on ens trobem ara, en aquest cas es molt senzill extaiem la informació "logged" (true/false) del context AuthContext (context d'autentificació que recau sobre el component AuthProvider englabant tot el HeroesApp). Sota aquesta condició fem retornar unes dades o unes altres, en cas que logged= true retornem els children de la private route (aquest children estan continguts en el component AppRouter dins del tag de PrivateRoutes i basicament es el component HeroesRoutes(el cual gestiona tota la funcionalitat de la app una vegada loggejat, juntament amb components fills...)). En cas que logged=false, simplement redirigeix al login (eviant que es consultin pagines privades si no estas loggejat)
    return(
        logged
        ? children
        : <Navigate to="/login" />
    ) 
}
