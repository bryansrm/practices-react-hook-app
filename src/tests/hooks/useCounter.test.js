import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en useCOunter', () => {
    
    test('debe retornar valores por defecto', () => {
       
        const { result } = renderHook( () => useCounter() );

        //console.log(result.current);
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    });
    
    test('debe inciar el counter con 100', () => {
       
        const { result } = renderHook( () => useCounter(100) );

        expect( result.current.counter ).toBe(100);

    });
    
    test('debe de incrementar el counter en 1', () => {
       
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act( () =>  increment() );

        expect( result.current.counter ).toBe(11);

    });

    test('debe de decrementar el counter en -1', () => {
       
        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;

        act( () =>  decrement() );

        expect( result.current.counter ).toBe(9);

    });

    test('debe de resetear el counter en su valor por default', () => {
       
        const { result } = renderHook( () => useCounter() );
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe(10);

    });

});
