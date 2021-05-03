import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ObservationLink from './ObservationLink';
import { mount } from 'enzyme';

import { MemoryRouter as Router, Link } from 'react-router-dom';

const observationLink = (
    <Router>
        <ObservationLink observationType={'dummy-type'} id={'dummy-id'} count={123} />
    </Router>
);

describe('observation link', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            observationLink,
            div
        );
    });

    // WHEN THIS TEST BELOW ADDED, RUNNING 'NPM TEST' GIVES THE FOLLOWING ERROR
    // 'SyntaxError: Cannot use import statement outside a module'
    // IT DOESN'T TROW THE ERROR WHEN IMPORTING ENZYME, ONLY WHEN USING MOUNT

    it('renders with a link with the correct props', () => {
        const wrapper = mount(observationLink);
        expect(wrapper.find(Link).props().to).toBe('/view/dummy-id/dummy-type');
    });
});