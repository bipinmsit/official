import React, {useState, useEffect} from 'react'
import contact from './images/contact-us.jpg'

const NewContact = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [data, setData] = useState({
        fname: '',
        surname: '',
        email: '',
        phone: ''
    })
    const inputEvent = (event) => {
        const {name, value} = event.target
        console.log(event.target)
        setData((oldVal) => {
            return(
                {
                ...oldVal,
                [name]: value 
            }
            )
        })
    }
    const formSubmit = () => {
        alert(`Thanks ${data.fname} ${data.surname}! We will get back to you shortly.`)
    }
    return(
        <>
            <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 mx-auto mb-5 offset-xl-2 mx-auto">
                        <img src={contact} className="w-100 h-100" alt="contact-us" />
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="row">

                <div className="col-xl-6 offset-xl-2 mx-auto">
                    <form id="contact-form" onSubmit={formSubmit}>

                        <div className="messages"></div>

                        <div className="controls">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Firstname *</label>
                                        <input id="form_name" type="text" 
                                        name="fname" 
                                        className="form-control" 
                                        placeholder="Please enter your firstname *" 
                                        required="required"
                                        data-error="Firstname is required."
                                        value={data.fname}
                                        onChange={inputEvent} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Lastname *</label>
                                        <input id="form_lastname" type="text" 
                                        name="surname" 
                                        className="form-control" 
                                        placeholder="Please enter your lastname *" 
                                        required="required"
                                        data-error="Lastname is required."
                                        value={data.surname}
                                        onChange={inputEvent} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input id="form_email" type="email" 
                                        name="email" 
                                        className="form-control" 
                                        placeholder="Please enter your email *" 
                                        required="required"
                                        data-error="Valid email is required."
                                        value={data.email}
                                        onChange={inputEvent} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input id="form_phone" type="tel" 
                                        name="phone" 
                                        className="form-control" 
                                        placeholder="Please enter your phone"
                                        value={data.phone}
                                        onChange={inputEvent} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Message *</label>
                                <textarea id="form_message" 
                                name="message" className="form-control" placeholder="Message for me *" rows="4" required="required"
                                    data-error="Please, leave us a message."></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                            <input type="submit" className="btn btn-success btn-send" value="Send message" />

                            <p className="text-muted">
                                <strong>*</strong> These fields are required.</p>

                        </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default NewContact