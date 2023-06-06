import { types } from "../../../../src/auth/types/types";


describe('Tests en archivo types', () => {
    
    test('debe regresar estos types', () => {
        expect( types ).toEqual (
            {
                login: '[Auth] Login',
                logout: '[Auth] Logout'
            }
        )
    });
});