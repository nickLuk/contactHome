import React, {Fragment} from "react";
import "./contactlist.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = () => {
    
    return (
        <Fragment>
            <h2>ContactList</h2>
            <ContactItem></ContactItem>
        </Fragment>
       
    );
}

export default ContactList;