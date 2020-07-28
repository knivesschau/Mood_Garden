import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import ViewGarden from './ViewGarden';

describe ('ViewGarden Component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        
        ReactDOM.render(
            <BrowserRouter>
                <ViewGarden/>
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the complete ViewGarden Component and all nested Components', () => {
        const wrapper = shallow(<ViewGarden/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})