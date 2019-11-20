import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ContactDetail = (props: any) => {

    return (<div className="container">
        <Row>
            <Col sm={4}>
                <img src={props.contact.avatar} width={100} height={100} alt={props.contact.first} className="rounded-circle" />
            </Col>
            <Col sm={8}>
                <table className="table-responsive">
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
                        <td>{props.contact.street}</td>
                    </tr>
                    <tr>
                        <th className="bold-text" scope="row">city:</th>
                        <td>{props.contact.city}</td>
                    </tr>
                    <tr>
                        <th className="bold-text" scope="row">state:</th>
                        <td>{props.contact.state}</td>
                    </tr>
                    <tr>
                        <th className="bold-text" scope="row">postCode:</th>
                        <td>{props.contact.postCode}</td>
                    </tr>
                </table>
            </Col>
        </Row>
    </div>);
};
export default ContactDetail;