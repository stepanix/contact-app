import Enzyme, {shallow} from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import ContactDetail from "./ContactDetail";
import { ContactModel } from "../Models/ContactModel";

Enzyme.configure({adapter: new Adapter()});

const contactModel: ContactModel = {
    name: {
        first: "Miriam",
        last: "Torres"
    },
    location: {
        street: {
            number: 978,
            name: "Paseo de Extremadura"
        },
        city: "Lugo",
        state: "Navarra",
        postcode: 96945
    },
    email: "miriam.torres@example.com",
    phone: "973-867-509",
    picture: {
        large: "https://randomuser.me/api/portraits/women/67.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg"
    }
};

describe("ContactDetail component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<ContactDetail contact={contactModel} />);
        expect(wrapper.exists()).toBe(true);
    });

});