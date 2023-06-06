import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom'

export const PublicRoutes = ({ children }) => {


    const { logged } = useContext( AuthContext )


       // Para explicación de todo el codigo implicado en hacer una ruta publica o privada ver los comentarios de "PrivateRoutes.jsx" 
  return (
    logged
    ? <Navigate to="/marvel" />
    : children
  )
}
