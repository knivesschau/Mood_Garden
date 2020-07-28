import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import EditRose from './EditRose';

describe ('EditRose Component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        
        ReactDOM.render(
            <BrowserRouter>
                <EditRose/>
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });
    
    it ('renders the complete EditRose Component and all nested Components', () => {
        const wrapper = shallow(<EditRose/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})