import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RoseColor from './RoseColor';

describe ('RoseColor Component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<RoseColor/>, div)
        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the complete RoseColor component image', () => {
        const wrapper = shallow(<RoseColor/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})