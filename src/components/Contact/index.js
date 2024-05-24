import React from "react";
import { Form } from "react-bootstrap";

function Contact() {
    return(
        <Form className="bg-primary h-100">
            {/* email name and message */}
            <Form.Group className="form-group text-tertiary">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Email"/>     
            </Form.Group>

            <Form.Group>
                
            </Form.Group>

            <Form.Group>
                <textarea ></textarea>
            </Form.Group>
        </Form>
    )
}

export default Contact;