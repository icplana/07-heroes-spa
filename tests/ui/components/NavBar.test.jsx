import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";


// para ver el uso de jest.mock ver clase 229
const mockedUseNavigate = jest.fn()

jest.mock("react-router-dom", () => ({

    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate
}) )

describe('Pruebs con el NavBar.jsx', () => { 
    
    const contextValue = { user: { name: 'Juanitojuan', id: '123'}, logout: jest.fn() }

    beforeEach(() => jest.clearAllMocks() )
   
    test('debe aparecer el nombre de la persona loggeada', () => {
        
        
        

        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter> 
        )

        expect( screen.getByText( contextValue.user.name )).toBeTruthy()
    });

    test('que cuando se haga click en logout que se mande llamar: 1.navigate con login y replace 2.funcion logout', () => {

        
        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter> 
        )
        
        fireEvent.click( screen.getByText('Logout') )
        expect( contextValue.logout ).toBeCalled()
        expect( mockedUseNavigate ).toBeCalledWith('/login',{
            replace: true
        })
    });
 })