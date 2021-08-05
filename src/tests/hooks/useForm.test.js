import { act, renderHook } from "@testing-library/react-hooks";
import { shallow } from "enzyme";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Bryan',
        email: 'bryan@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) ); 
        const [ form ] = result.current;

        expect( form ).toEqual( initialForm );

    });

    test('debe de cambiar el valor del formulario ( nombre )', () => {

        const { result } = renderHook( () => useForm(initialForm) ); 
        const [ , handleInputChange ] = result.current;

        act(() => {
            handleInputChange({ 
                target: {
                    name: 'name',
                    value: 'Steven'
                }
            });
        });

        const [ form ] = result.current;

        expect( form ).toEqual({ ...initialForm, name: 'Steven'});

    });

    test('debe de re-establecer un formulario con RESET', () => {
        
        const { result } = renderHook( () => useForm(initialForm) ); 
        const [ , handleInputChange, reset ] = result.current;

        act(() => {
            // Se realiza el input change
            handleInputChange({ 
                target: {
                    name: 'name',
                    value: 'Steven'
                }
            });

            // Se re estable el formulario al valor inicial
            reset();
        });

        const [ form ] = result.current;

        expect( form ).toEqual( initialForm );
        expect( form.name ).toBe( 'Bryan' );

    });
    

});
