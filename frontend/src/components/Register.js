import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBAlert
} from 'mdbreact';
import 'sweetalert2/src/sweetalert2.scss';
import axios from 'axios';
import '../css/ContactFormPage.css'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Navbar from "./Navbar";


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            phone: '',
            collapseID: '',
            firstNamevalidation: false,
            lastNamevalidation: false,
            emailvalidation: false,
            usernamevalidation: false,
            passwordvalidation: false,
            phonevalidation: false


        };
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onChangeConfirmPaswword = this.onChangeConfirmPaswword.bind(this);
        this.onChangePhone= this.onChangePhone.bind(this);
        this.registerUser= this.registerUser.bind(this);

    }



    onChangefirstName(event){
        this.setState({
            firstName: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onChangelastName(event){
        this.setState({
            lastName: event.target.value,
            [event.target.name]: event.target.value

        })

    }

    onChangeEmail(event){
        this.setState({
            email: event.target.value,
            [event.target.name]: event.target.value

        })
    }


    onChangeUsername(event){
        this.setState({
            username: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onChangePassword(event){
        this.setState({
            password: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onChangeConfirmPaswword(event){
        this.setState({
            confirmPassword: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onChangePhone(event){
        this.setState({
            phone: event.target.value,
            [event.target.name]: event.target.value

        })
    }


    registerUser(event){
        event.preventDefault();
        if(this.state.password === this.state.confirmPassword){
            if(this.state.name !== ''){
                this.setState({
                    firstNamevalidation: false
                })
                if(this.state.address !== '') {
                    this.setState({
                       lastNamevalidation: false
                    })
                    if (this.state.email !== '') {
                        this.setState({
                            emailvalidation: false
                        })
                        if (this.state.username !== '') {
                            this.setState({
                                usernamevalidation: false
                            })
                            if (this.state.password !== '') {
                                this.setState({
                                    passwordvalidation: false
                                })
                                if (this.state.confirmPassword !== '') {
                                    if(this.state.phone !== '') {
                                        this.setState({
                                            phonevalidation: false
                                        })


                                        console.log("Validation complete");

                                        const newUser = {
                                            firstName: this.state.firstName,
                                            lastName: this.state.lastName,
                                            email: this.state.email,
                                            username: this.state.username,
                                            password: this.state.password,
                                            phone: this.state.phone,
                                        }
                                        axios.post('http://localhost:4000/users/add', newUser)
                                            .then(res => {
                                                    console.log(res)
                                                    console.log(newUser);
                                                    if (res.data.Message === 'User added successfully') {
                                                        Swal.fire(
                                                            '',
                                                            'User Details added successfully !.',
                                                            'success'
                                                        );
                                                        this.props.history.push('/login');
                                                        window.location.reload();
                                                        this.setState({
                                                            firstName: '',
                                                            lastName: '',
                                                            email: '',
                                                            username: '',
                                                            password: '',
                                                            confirmPassword: '',
                                                            phone: '',
                                                            collapseID: '',
                                                            firstNamevalidation: false,
                                                            lastNamevalidation: false,
                                                            emailvalidation: false,
                                                            usernamevalidation: false,
                                                            passwordvalidation: false,
                                                            phonevalidation: false                                  })
                                                    } else {
                                                        Swal.fire(
                                                            '',
                                                            'User Details not added !',
                                                            'error'
                                                        )
                                                    }
                                                }
                                            );

                                    } else {
                                        console.log("phone number is empty");
                                        this.setState({
                                            phonevalidation: true
                                        })
                                    }
                                } else {
                                    console.log(" confirm password is empty");
                                }
                            } else {
                                console.log("password id empty");
                                this.setState({
                                    passwordvalidation: true
                                })
                            }
                        } else {
                            console.log("username empty");
                            this.setState({
                                usernamevalidation: true
                            })
                        }
                    } else {
                        console.log("email empty");
                        this.setState({
                            emailvalidation: true
                        })
                    }
                }else{console.log("address empty");
                    this.setState({
                        lastNamevalidation : true
                    })
                }
            }else{console.log("name empty");
                this.setState({
                    firstNamevalidation : true
                })
            }
        }else{console.log("password != confirmPassword");
            Swal.fire(
                '',
                'password and confirm password fields are not the same !',
                'error'
            );
        }
    };



    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    componentWillUnmount()
    {
        document.querySelector('nav').style.height = 'auto';
    }

    render()
    {
        const {collapseID} = this.state;
        const navStyle = {marginTop: '65px'};
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{backgroundColor: 'transparent'}}
                onClick={this.toggleCollapse('navbarCollapse')}
            />
        );
        return (
            <div id='contactformpage'>

                <Router>
                    <div>
                        {collapseID && overlay}
                    </div>
                </Router>

                <MDBView>
                    <MDBMask overlay='grey-light'/>
                    <MDBContainer
                        style={{height: '100%', width: '100%%', paddingTop: '10rem'}}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                            <div className='black-text text-center text-md-left col-md-6 mt-xl-5 mb-5'>
                                <h1 className='display-4 font-weight-bold'> Sign Up Right Now!</h1>
                                <hr className='hr-light'/>
                                <h6 className='mb-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </h6>
                            </div>
                            <MDBCol md='6' xl='5' className='mb-4'>
                                <MDBCard className='dark-grey-text'>
                                    <MDBCardBody className='z-depth-2'>
                                        <form onSubmit={this.registerUser}>
                                            <h3 className='dark-grey-text text-center'>
                                                <strong>Register</strong>
                                            </h3>
                                            <hr/>
                                            <MDBInput label='First Name' icon='user' onChange={this.onChangefirstName} value={this.state.firstName} name="firstName" type="text"/>
                                            {
                                                this.state.firstNamevalidation ? <MDBAlert color="danger">
                                                    name is empty
                                                </MDBAlert> : ''
                                            }
                                            <MDBInput label='Last Name' icon='user' onChange={this.onChangelastName} value={this.state.lastName} name="lastName" type="text"/>
                                            {
                                                this.state. lastNamevalidation ? <MDBAlert color="danger">
                                                    address is empty
                                                </MDBAlert> : ''
                                            }
                                            <MDBInput label='Email' icon='user' onChange={this.onChangeEmail} value={this.state.email} name="email" type="email"/>
                                            {
                                                this.state.emailvalidation ? <MDBAlert color="danger">
                                                    email is empty
                                                </MDBAlert> : ''
                                            }

                                            <MDBInput label='Username' icon='user' onChange={this.onChangeUsername} value={this.state.username} name="username" type="text"/>
                                            {
                                                this.state.usernamevalidation ? <MDBAlert color="danger">
                                                    username is empty
                                                </MDBAlert> : ''
                                            }
                                            <MDBInput label='Password' icon='user' onChange={this.onChangePassword} value={this.state.password} name="password" type="password"/>
                                            {
                                                this.state.passwordvalidation  ?
                                                    <MDBAlert color="danger">
                                                        password is empty
                                                    </MDBAlert> : ''
                                            }
                                            <MDBInput label='Confirm Password' icon='user' onChange={this.onChangeConfirmPaswword} value={this.state.confirmPassword} name="confirmPassword" type="password"/>
                                            {
                                                this.state.password !== this.state.confirmPassword ? <MDBAlert color="danger">
                                                    password and confirm password does not match
                                                </MDBAlert> : ''
                                            }
                                            <MDBInput label='Phone' icon='user' onChange={this.onChangePhone} value={this.state.phone} name="phone" type="text"/>
                                            {
                                                this.state.phonevalidation ?
                                                    <MDBAlert color="danger">
                                                        phone is empty
                                                    </MDBAlert> : ''
                                            }
                                            <div className='text-center mt-3 black-text'>
                                                <MDBBtn color='indigo' type="submit" >Submit</MDBBtn>
                                            </div>
                                        </form>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </MDBView>
            </div>
        );
    }
}

export default Register;
