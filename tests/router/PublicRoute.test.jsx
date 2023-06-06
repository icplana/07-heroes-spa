import { render, screen } from "@testing-library/react";
import { PublicRoutes } from "../../src/router/PublicRoutes";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('pruebas en PublicRoute', () => { 
    
    test('mostrar children si no esta autenticado ( logged = false ) ', () => {
        
        const contextValue = { logged: false }

        render( 
            <AuthContext.Provider value = { contextValue } >
                <PublicRoutes>
                    PublicRoutes
                </PublicRoutes>
            </AuthContext.Provider>       
        )

        expect (screen.getByText('PublicRoutes')).toBeTruthy()
        
    });



    test('debe de navegar si esta autenticado ( logged = true )', () => {
        
        const contextValue = { 
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC'
            }
        }
        render( 
            <AuthContext.Provider value = { contextValue } >
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route 
                            path='login' 
                            element=
                            {
                                <PublicRoutes>
                                    PublicRoutes
                                </PublicRoutes>
                            }
                        />
                        <Route path='marvel' element ={<h1>Página Marvel</h1>} /> 

                    </Routes>

                    
                </MemoryRouter>   
            </AuthContext.Provider>       
        )
        
        

        expect (screen.getByText('Página Marvel')).toBeTruthy()
    });
 })