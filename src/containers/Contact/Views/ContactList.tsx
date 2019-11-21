import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';

import { useDispatch, useSelector } from "react-redux";

import { GET_CONTACTS } from "../../../redux/Actions/ContactAction";
import { ActionModel } from "../../../shared/Models/ActionModel";

import {
    convertToUpper,
    getContactsSelectedByKey,
    getCountOfContactsSelectedByKey,
    getContactCardPosition
} from "../ViewModels/ContactListViewModel";
import { ContactModel } from "../Models/ContactModel";

import { configJson } from "../../../configs/config";

import ContactDetail from "./ContactDetail";


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

    useEffect(() => {
        dispatch(getContactAction());
    }, [dispatch]);


    const handleKeySelected = (key: string) => {
        if (show) {
            setShow(false);
        }
        setKey(key);
    };

    const handleContactSelected = (contact: ContactModel) => {
        setContactSelected(contact);
    }

    const handleMouseUp = (event: any) => {
        const pos = getContactCardPosition(event.currentTarget.getBoundingClientRect());
        if (!show) {
            setShow(true);
        }
        setCurrentLeft(pos.x);
        setCurrentTop(pos.y);
    }

    const contactCardView = () => {
        return <div className="container"> {
            show ?
                <div className="contact-card-parent-container" style={{ left: currentLeft, top: currentTop }}>
                    <Card className="contact-card-container">
                        <div className="close-button" onClick={() => setShow(false)}> X </div>
                        <div className="contact-card-header">{contactSelected ? contactSelected.name.first : ''},  <span className="bold-text">{contactSelected ? convertToUpper(contactSelected.name.last) : ''} </span></div>
                        <div> {contactSelected ? <ContactDetail contact={contactSelected} /> : ''} </div>
                    </Card></div>
                : ''} </div>
    };

    const getTabData = () => {
        let contactsSelected = getContactsSelectedByKey(contactList, key);
        const details = <div> <hr></hr> {contactsSelected.length > 0 ? <Row>
            {contactsSelected.map((item: ContactModel, index: any) => (
                <Col md={6} key={index}>
                    <div onMouseUp={handleMouseUp} className="custom-link" onClick={() => handleContactSelected(item)}> {item.name.first},  <span className="bold-text">{convertToUpper(item.name.last)}</span> </div>
                    <hr></hr>
                </Col>
            ))}
        </Row> : <Row> <Col><div className="no-contact-found">No contact found</div></Col> </Row>} </div>;
        return details;
    };

    const getTitleTab = (key: string) => {
        return <div> {key} {" "} <Badge variant="info">{getCountOfContactsSelectedByKey(contactList, key)} </Badge></div>;
    }

    return (<div className="container component-container">

        <div className="page-title">{configJson.title}</div>

        {!isLoading ? <Card>
            <div className="tab-container">

                {contactCardView()}

                <Tabs id="contacts-tab" activeKey={key} onSelect={(k: any) => handleKeySelected(k)}>
                    {configJson.tabs.map((item: any, index: any) => (
                        <Tab className="contact-tab-content" key={index} eventKey={item} title={getTitleTab(item)}>
                            {getTabData()}
                        </Tab>
                    ))}
                </Tabs>

            </div>
        </Card> : <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>}
    </div>);

};


export default ContactList