import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';

import App from './App';

Enzyme.configure({
    adapter: new EnzymeAdaptor()
});

describe('APP',()=>{

    test('App renders without crashing', () => {
        const app = shallow(<App />);
        const element = app.find(".App");
        expect(element.length).toBe(1)
    });

    test('app should include header title', ()=>{
        const app = shallow(<App/>);
        const title = app.find('header h1');
        expect(title.length).toBe(1);
    });


});