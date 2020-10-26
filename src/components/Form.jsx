import React, { Component } from 'react';
import axios from 'axios'
let invalidEmail = true;
let invalidPassword = true;

export class PostForm extends Component {

    state = {
        email: '',
        password: '',
        street: '',
        zip: '',
        city: '',
        country: '',
        companyName: '',
        companySector: '',
        companyType: '',
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        let button = document.getElementById('submitButton');
        let elements = document.getElementsByTagName('input');

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].value === '') {
                button.disabled = true;
                return false;
            }
            else {
                button.disabled = false;
            }
        }
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value })

        const email = this.state.email;
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        invalidEmail = re.test(String(email).toLowerCase());
    }

    handlePasswordChange = e => {
        this.setState({ password: e.target.value })
        let passwordLength = e.target.value.length;

        if (passwordLength <= 6) {
            invalidPassword = false;
        } else {
            invalidPassword = true;
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = this.state;
        console.log({ data })
        axios.post('https://pickshare.herokuapp.com/users/register', data)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        const { email, password, street, zip, city, country, companyName, companySector, companyType } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text' placeholder='Email' value={email} name='email' onChange={this.handleEmailChange} />
                    </div>
                    <div>
                        {!invalidEmail ? 'Invalid Email' : ''}
                    </div>
                    <div>
                        <input type='password' placeholder='Password' value={password} name='password' onChange={this.handlePasswordChange} />
                    </div>
                    <div>
                        {!invalidPassword ? 'Password must be of at least 6 characters.' : ''}
                    </div>
                    <div>
                        <input type='text' placeholder='Street' value={street} name='street' onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type='text' placeholder='Zip Code' value={zip} name='zip' onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type='text' placeholder='City' value={city} name='city' onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type='text' placeholder='Country' value={country} name='country' onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type='text' placeholder='Company Name' value={companyName} name='companyName' onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type='text' placeholder='Company Sector' value={companySector} name='companySector' onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type='text' placeholder='Company Type' value={companyType} name='companyType' onChange={this.handleChange} />
                    </div>
                    <br />
                    <button id='submitButton' disabled={true} type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;