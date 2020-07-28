import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import MainNav from './MainNav';

describe ('MainNav Component', () => {
    it ('renders main navigation without crashing', () => {
        const div = document.createElement('div')
        
        ReactDOM.render(
            <BrowserRouter>
                <MainNav/>, 
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the complete MainNav Component', () => {
        const wrapper = shallow(<MainNav/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})


