import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ContactList from './ContactList';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import * as ReactReduxHooks from "../../../redux/Hooks/ReactReduxHooks";
import ContactStubStore from '../../../shared/Stubs/ContactStubStore';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();

const initialState = {
    contactList: ContactStubStore,
    error: {},
    isLoading: false
};


describe('<ContactList />', () => {

    let container;
    let useEffect;
    let store;


    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };


    beforeEach(() => {
        store = mockStore(initialState);

        jest
            .spyOn(ReactReduxHooks, "useSelector")
            .mockImplementation(state => store.getState());

        jest
            .spyOn(ReactReduxHooks, "useDispatch")
            .mockImplementation(() => store.dispatch);

        container = render(
            <Provider store={store}>
                <ContactList />
            </Provider>
        )
    });

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('renders without crashing', () => {
          expect(container).toBeTruthy();
    });

});