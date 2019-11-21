import React, { useEffect, useState, useRef } from "react";

import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';



import { useDispatch, useSelector } from "react-redux";

import { GET_CONTACTS } from "../../../redux/Actions/ContactAction";
import { ActionModel } from "../../../shared/Models/ActionModel";

import { getSortedContactList, convertToUpper, getContactsByKeySelected } from "../ViewModels/ContactListViewModel";
import { ContactModel } from "../Models/ContactModel";
import ContactDetail from "./ContactDetail";
import { configJson } from "../../../configs/config";


const getContactAction = (): ActionModel => ({
    type: GET_CONTACTS
});

const ContactList = () => {

    const [show, setShow] = useState(false);
    const [key, setKey] = useState('a');

    const [currentTop, setCurrentTop] = useState();
    const [currentLeft, setCurrentLeft] = useState();
    const [contactSelected, setContactSelected] = useState();
    const dispatch = useDispatch();

    const contactList: any[] = useSelector((state: any) => state.contact.contactList);
    const isLoading: boolean = useSelector((state: any) => state.contact.isLoading);

    let contactRef = useRef<Array<HTMLDivElement | null>>([]);


    useEffect(() => {
        dispatch(getContactAction());
    }, [dispatch]);

    useEffect(() => {
        if (contactList.length > 0) {
            contactRef.current = contactRef.current.slice(0, contactList.length);
            // console.log('contactRef', contactRef);
        }

    }, [contactList]);


    const handleClose = () => setShow(false);

    const handleContactSelected = (contact: ContactModel) => {
        console.log(contactRef.current);
        // setContactSelected(contact);
        // setShow(true);
    }

    // console.log(contactList);
    // const handleMouseUp = () => {
    //    // const pos =  contactRef.current;
    //    console.log('ref pos', contactRef.current);

    //    // let xPos = document.getElementById(contactId).getBoundingClientRect();
    //     //setCurrentLeft(event.clientX - event.target.offsetLeft - 10);
    //     //setCurrentTop(event.clientY - event.target.offsetTop - 10);
    // }

    const getTabContent = () => {
        console.log('filtered contacts', getContactsByKeySelected(contactList, key));
        return key;
    }

    return (<div className="container component-container">

        <div className="page-title">{configJson.title}</div>

        {!isLoading ? <Card>
            <div className="tab-container">

                {show ?
                    <div style={{ zIndex: 1000, width: '50%', position: 'relative' }}>

                        <Card style={{ position: 'absolute', backgroundColor: '#E0E0E0' }}>
                            <div className="close-button" onClick={() => handleClose()}> X </div>
                            <Card.Body>
                                <Card.Title>{contactSelected ? contactSelected.name.first : ''},  <span className="bold-text">{contactSelected ? convertToUpper(contactSelected.name.last) : ''} </span></Card.Title>
                                <Card.Text>
                                    testing me
                                <ContactDetail contact={contactSelected} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    : ''}

                    <Tabs id="contacts-tab" activeKey={key} onSelect={(k: any) => setKey(k)}>
                        {configJson.tabs.map((item: any, index: any) => (
                            <Tab key={index} eventKey={item} title={item}>
                                {getTabContent()}
                            </Tab>
                        ))}
                    </Tabs>

                {/* <Tab.Container defaultActiveKey={contactList[0].group}>
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                {contactList.map((item: any) => (
                                    <Nav.Item key={item.group}>
                                        <Nav.Link eventKey={item.group}>
                                            {item.group}
                                            <Badge className="custom-badge" variant="light">{item.count}</Badge>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                        <Col className="col-container text-center" sm={10}>
                            <Tab.Content>
                                {contactList.map((item: any, index: any) => (
                                    <Tab.Pane key={item.group} eventKey={item.group} onEnter={() => handleClose()}>
                                        <Row>
                                            {item.contactList.map((data: any, index: any) => (
                                                <Col md={5} key={index}>
                                                    <div ref={(el) => {contactRef.current[index] = el}} className="custom-link" onClick={() => handleContactSelected(data)}> {data.name.first},  <span className="bold-text">{convertToUpper(data.name.last)}</span> </div>
                                                    <hr></hr>

                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                ))}

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container> */}
            </div>
        </Card> : <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>}
    </div>);

};


export default ContactList