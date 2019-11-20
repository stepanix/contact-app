import React, { useEffect } from "react";
import { ContactModel } from "../Models/ContactModel";


const ContactDetail = (props: any) => {

    return(<div>
        {props.contact.email}
         </div>);

};
export default ContactDetail;