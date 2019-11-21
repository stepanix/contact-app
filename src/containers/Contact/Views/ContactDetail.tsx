import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ContactDetail = (props: any) => {

    return (<div className="container">
        <Row>
            <Col sm={4}>
                <img src={props.contact.picture.large} alt={props.contact.name.first} className="rounded-circle" />
            </Col>
            <Col sm={8}>
                <table className="table-responsive">
                    <tbody>
                        <tr>
                            <th className="bold-text" scope="row">e-mail:</th>
                            <td>{props.contact.email}</td>
                        </tr>
                        <tr>
                            <th className="bold-text" scope="row">phone:</th>
                            <td>{props.contact.phone}</td>
                        </tr>
                        <tr>
                            <th className="bold-text" scope="row">street:</th>
                            <td>{props.contact.location.street.number} {props.contact.location.street.name}</td>
                        </tr>
                        <tr>
                            <th className="bold-text" scope="row">city:</th>
                            <td>{props.contact.location.city}</td>
                        </tr>
                        <tr>
                            <th className="bold-text" scope="row">state:</th>
                            <td>{props.contact.location.state}</td>
                        </tr>
                        <tr>
                            <th className="bold-text" scope="row">postCode:</th>
                            <td>{props.contact.location.postcode}</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    </div>);
};
export default ContactDetail;