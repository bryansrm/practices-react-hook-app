import React from 'react'
import { shallow } from 'enzyme';
// import { shallow } from '@wojtekmaj/enzyme-adapter-react-17'
import { HookApp } from '../HookApp';



describe('Pruebas en HookApp', () => {
    
    test('debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<HookApp />);

        expect( wrapper ).toMatchSnapshot();

    });
    
});

