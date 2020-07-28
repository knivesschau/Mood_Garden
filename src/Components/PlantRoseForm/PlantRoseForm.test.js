import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import PlantRoseForm from './PlantRoseForm';

describe ('PlantRoseForm Component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        
        ReactDOM.render(
            <BrowserRouter>
                <PlantRoseForm/>
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the complete PlantRoseForm Component', () => {
        const wrapper = shallow(<PlantRoseForm/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})