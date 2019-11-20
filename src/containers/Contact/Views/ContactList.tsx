import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';

import { useDispatch, useSelector } from "react-redux";

import { GET_CONTACTS } from "../../../redux/Actions/ContactAction";
import { ActionModel } from "../../../shared/Models/ActionModel";

import { groupContactList, convertToUpper, getDefaultContactValues } from "../ViewModels/ContactListViewModel";
import { ContactModel } from "../Models/ContactModel";
import ContactDetail from "./ContactDetail";


// function to dispatch contact list action.
const getContactAction = (): ActionModel => ({
    type: GET_CONTACTS
});

const ContactList = () => {

    // useState hook to show/hide modal window
    const [show, setShow] = useState(false);

    const [contactSelected, setContactSelected] = useState();

    // useDispatch hook is used to dispatch redux actions from presentation layer
    const dispatch = useDispatch();

    // useSelector hook is used to get data state from redux store.
    const contactList: any[] = useSelector((state: any) => groupContactList(state.contact.contactList));

    /**
     * API calls, changes to DOM and other side effects are done in the component
     * lifecycle 'componentDidMount' and 'componentDidUpdate'. useEffect Hook is a
     * combination of these lifecycles.
    */
    useEffect(() => {
        /**
         * dispatch GET_CONTACTS action as soon as component is mounted. In a normal
         * class based component, this would be done in the 'componentDidMount' method.
         */
        dispatch(getContactAction());
    }, [dispatch]);

    const handleClose = () => setShow(false);

    const handleContactSelected = (contact: ContactModel) => {
        setContactSelected(contact);
        setShow(true);
    }

    return (<div className="container component-container">
        {contactList.length > 0 ? <Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{contactSelected ? contactSelected.first : ''},  <span className="bold-text">{contactSelected ? convertToUpper(contactSelected.last) : ''} </span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactDetail contact={contactSelected} />
                </Modal.Body>
            </Modal>
            <div className="tab-container">
                <Tab.Container defaultActiveKey={contactList[0].group}>
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                {contactList.map((item: any) => (
                                    <Nav.Item key={item.group}>
                                        <Nav.Link eventKey={item.group}>{item.group}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                        <Col className="col-container text-center" sm={10}>
                            <Tab.Content>
                                {contactList.map((item: any) => (
                                    <Tab.Pane key={item.group} eventKey={item.group}>
                                        <Row>
                                            {item.contactList.map((data: any) => (
                                                <Col md={5} key={data.email}>
                                                    <div className="custom-link" onClick={() => handleContactSelected(data)}> {data.first},  <span className="bold-text">{convertToUpper(data.last)}</span> </div>
                                                    <hr></hr>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </Card> : " "}
    </div>);

};

export default ContactList