import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendEmail } from "../redux/action/email";
import { setAlert } from "../redux/action/alert";
import  WorldMap from 'react-world-map';
import "../styles/contact.css"


const Contact = (props) => {
    const [state, setState] =  useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    useEffect(() => {
        if(props.email){
            if (props.email.msg !== ""){
                setState({
                    name: "",
                    subject: "",
                    email: "",
                    message: ""
                })
            }
        }
    }, [props.email.msg])

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!state.name || !state.subject || !state.email || !state.message)
            return props.setAlert("Fill all the fields", "error");

        const obj = {};
        obj.name = state.name;
        obj.subject = state.subject;
        obj.email = state.email;
        obj.message = state.message;

        props.sendEmail(JSON.stringify(obj))
    }
    
    return(
        <div className = {`contact-container container ${props.dark ? ` dark-mode` : ``}`}>
            <div className = "contact-item">
                <div className = "work-title">
                    <div>Contact me</div>
                </div>
                <div className =  "work-description">
                    I'm interested in freelance opportunities - especially ambitious or large projects.
                    However, If you have other request or question, don't hesitate to use the form.
                </div>
                <form onSubmit = {handleSubmit} className = "contact-form">
                    <div className = "row-contact">
                        <div className  = "col-contact">
                            <input onChange = {handleChange} value = {state.name} type = "text" placeholder =  "Name" name = "name"/>
                        </div>
                        <div className  = "col-contact">
                            <input onChange = {handleChange}  value = {state.email}  type = "text" placeholder =  "Email" name = "email"/>
                        </div>
                    </div>
                    <div className  = "row-contact">
                        <input onChange = {handleChange}  value = {state.subject} type = "text" placeholder =  "Subject" name = "subject"/>
                    </div>
                    <div className  = "row-contact">
                        <textarea onChange = {handleChange}  value = {state.message} type = "text" placeholder =  "Message" name = "message"/>
                    </div>
                    <button type = "submit" className = "form-button">
                        Send message!
                    </button>
                </form>
            </div>
            <div className = "contact-item">
                <div className = "world-map">
                    <WorldMap selected={ "na"}  />
                </div>
                <div className = "info-container">
                    <div className = "address-label">Address</div>
                    <div className = "address">Street Villas Noa,<br/>Santiago De Los Caballeros 51000</div>
                    <div className = "address-label">Email</div>
                    <div className = "address">fenleymenelas@gmail.com</div>
                    <div className = "address-label">Phone</div>
                    <div className = "address">+1 (809) 614-3463</div>
                </div>
            </div>
            
        </div>
    )
}

Contact.propTypes = {
    sendEmail: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    email: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    email: state.email,
});


export default connect(mapStateToProps, {sendEmail, setAlert})(Contact);