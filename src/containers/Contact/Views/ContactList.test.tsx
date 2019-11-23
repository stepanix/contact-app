import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ContactList from './ContactList';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import * as ReactReduxHooks from "../../../redux/Hooks/ReactReduxHooks";
import ContactStubStore from '../../../shared/Stubs/ContactStubStore';
import { GET_CONTACTS } from '../../../redux/Actions/ContactAction';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();

const initialState = {
    contactList: ContactStubStore,
    error: {},
    isLoading: false
};


describe('<ContactList />', () => {

    let wrapper;
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

        wrapper = render(
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
        expect(wrapper).toBeTruthy();
    });

    it("on start, dispatch GET_CONTACTS action to store", () => {
        const actions = store.getActions();
        expect(actions).toEqual([{ type: GET_CONTACTS }]);
    });

    test("calls handleContactSelected", () => {      
        const { container } = render(<ContactList />);
        let buttons = container.querySelectorAll('button');
        fireEvent.click(buttons[0]);
    });

    test("calls handleMouseUp when show is true", () => {      
        const { container } = render(<ContactList />);
        let buttons = container.querySelectorAll('button');
        fireEvent.mouseUp(buttons[0]);
    });

    test("calls handleMouseUp when show is false", () => {
        // set show to true first
        const { container } = render(<ContactList />);
        let buttons = container.querySelectorAll('button');
        fireEvent.click(buttons[0]);
        fireEvent.mouseUp(buttons[0]);

        // set show to false next
        let closeButton = wrapper.getByLabelText('close-contact-card');
        fireEvent.click(closeButton);
        fireEvent.click(buttons[0]);
        fireEvent.mouseUp(buttons[0]);
    });

});