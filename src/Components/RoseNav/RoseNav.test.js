import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import RoseNav from './RoseNav';

describe ('RoseNav Component', () => {
    it ('renders secondary navigation route without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(
            <BrowserRouter>
                <RoseNav/>, 
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the complete RoseNav Component', () => {
        const wrapper = shallow(<RoseNav/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})