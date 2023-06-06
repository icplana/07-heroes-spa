import { useReducer } from "react";
import { authReducer } from "../../../src/auth/context/authReducer";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { types } from "../../../src/auth/types/types";




//authReducer es una funcion para un hook useReduce que controla el estado de autentificación

describe('Pruebas sobre el authReducer', () => {

    const initialState = { logged:false }
    const init = () => {
        const user = JSON.parse( localStorage.getItem('user') )
        return {
            logged: !!user,
            user
        }
    }  




    test('debe de retornar el estado por defecto', () => {

       const authState = authReducer( { logged: false }, {} )

        expect( authState ).toEqual( { logged:false })
    });

    test('debe llamar al login', () => {

        const user = { id: 'ABC', name: 'Juan'}

        const action = {
            type: types.login,
            payload: user
        }
        
        const authState = authReducer( { logged: false }, action )

        expect( authState ).toEqual( { logged: true, user })
    });

    test('dbe de borrar user y poner logged false con logout', () => {

        const action ={ type: types.logout }

        const authState = authReducer( { id: 'ABC', name: 'Juan'}, action )

        expect( authState ).toEqual( { logged: false })

    })
        
 })