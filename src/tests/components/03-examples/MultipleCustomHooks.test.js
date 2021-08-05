import React from 'react'
import { shallow } from "enzyme";
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach( () => {

        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });

    });
   
    test('debe de mostrar correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow( <MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('debe de mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Bryan',
                quote: 'Studing React ...'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks />);

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('p.mb-0').text().trim() ).toBe( 'Studing React ...' );

    });

});