import React, {useState} from 'react'

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        contact: ""
    })
    const inputEvent = (event) => {
        const {name, value} = event.target
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
        alert(`Thanks ${data.name}! We will get back to you shortly.`)
    }
    return(
        <>
        <div className="container mt-5">
        <div className="row">
            <div className="col-sm-6 mx-auto">

            <form onSubmit={formSubmit}>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" required
                name="name"
                value={data.name}
                onChange={inputEvent} />
            </div>
                <div className="mb-3">
                    <label className="mr-5">Gender: </label>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label">Female</label>
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Email address:</label>
                <input type="email" className="form-control"
                name="email"
                value={data.email}
                onChange={inputEvent} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Contact no:</label>
                <input type="text" className="form-control" required
                name="contact"
                value={data.contact}
                onChange={inputEvent} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>


            </div>
        </div>

        </div>
        </>
    )
}
export default Contact