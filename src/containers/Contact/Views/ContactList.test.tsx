import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ContactList from './ContactList';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();

const initialState = {
    contactList: [],
    error: {},
    isLoading: true
};

describe('<ContactList />', () => {

    let wrapper: any;

    beforeEach(() => {
        const store = mockStore(initialState);
        wrapper = shallow(
            <Provider store={store}>
                <ContactList />
            </Provider>
        )
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

});