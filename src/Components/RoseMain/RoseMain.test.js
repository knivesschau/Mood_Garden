import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import RoseMain from './RoseMain';

describe ('RoseMain Component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        
        ReactDOM.render(
            <BrowserRouter>
                <RoseMain/>
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });
    
    it ('renders the complete RoseMain Component and all nested Components', () => {
        const wrapper = shallow(<RoseMain/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})