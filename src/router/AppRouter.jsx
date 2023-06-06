import { Navigate, Route, Routes } from "react-router-dom"


import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoutes } from "./PublicRoutes"




export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path="login" element=
          {
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>          
          }
        />

        <Route path="/*" element=
          {
            <PrivateRoute>
              <HeroesRoutes/>
            </PrivateRoute>
          }
        />     

      </Routes>

    </>
  )
}
