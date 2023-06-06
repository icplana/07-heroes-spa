import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en PrivateRoute', () => { 

    test('mostrar children si esta autenticado ( logged = true ) ', () => {
        
        Storage.prototype.setItem = jest.fn()


        const contextValue = { logged: true, user: { id:'ABC', name: 'Juan' } }

        render( 
            <AuthContext.Provider value = { contextValue } >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        Ruta privada
                    </PrivateRoute>
                </MemoryRouter>    
            </AuthContext.Provider>       
        )

        expect (screen.getByText('Ruta privada')).toBeTruthy()
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman' )
        
    });
 })