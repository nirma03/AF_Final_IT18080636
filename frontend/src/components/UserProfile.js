import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
} from 'mdbreact';
import axios from 'axios';
import Swal from "sweetalert2";
import Navbar from "./Navbar";

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username:'',
            password:'',
            phone: '',
            userid: localStorage.getItem("userid"),
            userList: [],
            idEdit:'',
            firstNameEdit: '',
            lastNameEdit:'',
            emailEdit:'',
            usernameEdit:'',
            passwordEdit:'',
            confirmPasswordEdit:'',
            phoneEdit:'',
            modal: false,
            items: {
                default: "1",
            }
        }

        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangUsername = this.onChangUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword= this.onChangeConfirmPassword.bind(this)
        this.onChangePhone= this.onChangePhone.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
        this.updateUserProfile = this.updateUserProfile.bind(this);
        this.deleteUserAccount = this.deleteUserAccount.bind(this);



    };

    componentDidMount() {
        this.getUserDetails();

    }

    onChangefirstName(event){
        this.setState({
            firstNameEdit: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onChangelastName(event){
        this.setState({
            lastNameEdit: event.target.value,
            [event.target.name]: event.target.value

        })

    }

    onChangeEmail(event){
        this.setState({
            emailEdit: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangUsername(event){
        this.setState({
            usernameEdit: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onChangePassword(event){
        this.setState({
            passwordEdit: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangeConfirmPassword(event){
        this.setState({
            confirmPasswordEdit: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangePhone(event){
        this.setState({
            phoneEdit: event.target.value,
            [event.target.name]: event.target.value

        })
    }


    //load user details to page
    getUserDetails() {
        console.log("----------------------------");

        axios.get('http://localhost:4000/users/' + this.state.userid)
            .then(response => {
                console.log(response.data.name);
                this.setState({
                    userList : response.data,
                    firstNameEdit : response.data.firstName,
                    lastNameEdit :  response.data.lastName,
                    emailEdit: response.data.email,
                    usernameEdit:response.data.username,
                    passwordEdit:response.data.password,
                    confirmPasswordEdit : response.data.confirmPassword,
                    phoneEdit: response.data.phone,
                    idEdit:response.data._id,
                })

                console.log(this.state.userList);

            }).catch(function (error) {
            console.log(error);

        })
    }


    //update user profile

    updateUserProfile(idEdit,firstNameEdit,lastNameEdit,emailEdit,usernameEdit,passwordEdit,confirmPasswordEdit, phoneEdit) {

        if(this.state.passwordEdit === this.state.confirmPassword) {
            if (this.state.firstNameEdit !== '') {
                if (this.state.firstNameEdit !== '') {
                    if (this.state.emailEdit !== '') {
                        if (this.state.usernameEdit !== '') {
                            if (this.state.passwordEdit !== '') {
                                if (this.state.confirmPassword !== '') {
                                    if (this.state.phoneEdit !== '') {

                                        console.log("**" + idEdit);
                                        console.log("**" + firstNameEdit);
                                        console.log("**" + lastNameEdit);
                                        console.log("**" + emailEdit);
                                        console.log("**" + usernameEdit);
                                        console.log("**" + passwordEdit);
                                        console.log("**" + phoneEdit);

                                        axios.get('http://localhost:4000/users/update/' + this.state.idEdit + '/' + this.state.firstNameEdit + '/' + this.state.lastNameEdit + '/' +
                                            this.state.emailEdit + '/' + this.state.usernameEdit + '/' + this.state.passwordEdit + '/' + this.state.confirmPasswordEdit + '/' +
                                            this.state.phoneEdit)
                                            .then(response => {
                                                    console.log(response);
                                                    if (response.data.userUpdate === 'successfull') {
                                                        Swal.fire(
                                                            '',
                                                            'User Details updated successfully !.',
                                                            'success'
                                                        );
                                                        this.getUserDetails();
                                                        this.setState({
                                                            idEdit: '',
                                                            firstNameEdit: '',
                                                            lastNameEdit: '',
                                                            emailEdit: '',
                                                            usernameEdit: '',
                                                            passwordEdit: '',
                                                            confirmPasswordEdit: '',
                                                            phoneEdit: ''
                                                        })
                                                    } else {
                                                        Swal.fire(
                                                            '',
                                                            'Update of Details failed !',
                                                            'error'
                                                        )
                                                    }
                                                }
                                            );

                                    } else {
                                        console.log("phone number is empty");
                                        Swal.fire('phone number is empty')
                                    }
                                } else {
                                    console.log("confirm password field is empty");
                                    Swal.fire('confirm password field is empty')
                                }
                            } else {
                                console.log("password is empty");
                                Swal.fire('Password is empty')
                            }
                        } else {
                            console.log("username is empty");
                            Swal.fire('Username field is empty')
                        }
                    } else {
                        console.log("email empty");
                        Swal.fire('Email is empty')
                    }
                } else {
                    console.log("last name is empty");
                    Swal.fire('Last Name is empty')
                }
            } else {
                console.log("first name is empty");
                Swal.fire('First Name is empty')

            }
        }else{
            console.log("password and confirm password fields does not match");
            Swal.fire('Password and Confirm Password fields does not match')
        }
    }


    deleteUserAccount(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to undo this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                axios.get('http://localhost:4000/users/delete/' + id).then(response => {
                    if (response.data.userDelete === 'success') {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Delete Failed Error.',
                            'error'
                        )
                    } else {
                        Swal.fire(
                            '',
                            'User Profile Deleted Successfully !',
                            'success'
                        )
                        console.log("deleted profile called");
                        localStorage.removeItem('UserSignedIn');
                        localStorage.removeItem('userid');
                        this.props.history.push('/login');
                        window.location.reload();
                        console.log("directed to login page");
                    }
                })

            }  else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your account is safe :)',
                    'error'
                )
            }
        })

    }




    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    togglePills = (type, tab) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
            let items = {...this.state.items};
            items[type] = tab;
            this.setState({
                items
            });
        }
    };

    render() {
        return (

            <Router>
                <div>
                </div>



                <MDBCol md="12">
                <MDBContainer className="mt-5">
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBNav className="mt-5 nav-pills">
                                <MDBNavItem>
                                    <MDBNavLink link to="/user-profile" active={this.state.items["default"] === "1"}
                                                onClick={this.togglePills("default", "1")}>
                                        USER PROFILE
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink link to="/edit-profile" active={this.state.items["default"] === "2"}
                                                onClick={this.togglePills("default", "2")}>
                                        EDIT PROFILE
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNav>
                            <MDBTabContent activeItem={this.state.items["default"]}>
                                <MDBTabPane tabId="1">
                                    <p>
                                        <MDBContainer className="mt-5">


                                                {/*view user profile*/}

                                                <section className="my-5">
                                                    <MDBRow>
                                                        <MDBCol lg="5" className="text-center text-lg-left">
                                                            <img className="img-fluid"
                                                                 src="https://www.china-briefing.com/news/wp-content/uploads/2018/09/China-Brefing-Chinas-New-Gaming-Regulations-What-it-Means-for-Investors.jpg"
                                                                 alt=""/>
                                                            <br/>
                                                            <br/>
                                                            <MDBBtn className="btn-fb waves-light" color="danger" onClick={() => this.deleteUserAccount(this.state.userList._id)}>
                                                                Delete Profile
                                                            </MDBBtn>
                                                            <MDBBtn className="btn-fb waves-light" color="mdb-color" a href="/logout">
                                                                Logout
                                                            </MDBBtn>
                                                        </MDBCol>
                                                        <MDBCol lg="7">
                                                            <MDBRow className="mb-3">
                                                                <MDBCol size="1">
                                                                    <MDBIcon icon="user" size="lg" className="indigo-text"/>
                                                                </MDBCol>
                                                                <MDBCol xl="10" md="11" size="10">
                                                                    <h5 className="font-weight-bold mb-3">Name</h5>
                                                                    <p className="dark-grey-text">
                                                                        {this.state.userList.firstName}
                                                                    </p>
                                                                </MDBCol>
                                                            </MDBRow>

                                                            <MDBRow className="mb-3">
                                                                <MDBCol size="1">
                                                                    <MDBIcon icon="user" size="lg" className="indigo-text"/>
                                                                </MDBCol>
                                                                <MDBCol xl="10" md="11" size="10">
                                                                    <h5 className="font-weight-bold mb-3">Address</h5>
                                                                    <p className="dark-grey-text">
                                                                        {this.state.userList.lastName}
                                                                    </p>

                                                                </MDBCol>
                                                            </MDBRow>
                                                            <MDBRow className="mb-3">
                                                                <MDBCol size="1">
                                                                    <MDBIcon icon="user" size="lg" className="indigo-text"/>
                                                                </MDBCol>
                                                                <MDBCol xl="10" md="11" size="10">
                                                                    <h5 className="font-weight-bold mb-3">Email Address</h5>
                                                                    <p className="dark-grey-text">
                                                                        {this.state.userList.email}
                                                                    </p>
                                                                </MDBCol>
                                                            </MDBRow>
                                                            <MDBRow className="mb-3">
                                                                <MDBCol size="1">
                                                                    <MDBIcon icon="user" size="lg" className="indigo-text"/>
                                                                </MDBCol>
                                                                <MDBCol xl="10" md="11" size="10">
                                                                    <h5 className="font-weight-bold mb-3">Username</h5>
                                                                    <p className="dark-grey-text">
                                                                        {this.state.userList.username}
                                                                    </p>
                                                                </MDBCol>
                                                            </MDBRow>
                                                            <MDBRow className="mb-3">
                                                                <MDBCol size="1">
                                                                    <MDBIcon icon="user" size="lg" className="indigo-text"/>
                                                                </MDBCol>
                                                                <MDBCol xl="10" md="11" size="10">
                                                                    <h5 className="font-weight-bold mb-3">Phone</h5>
                                                                    <p className="dark-grey-text">
                                                                        {this.state.userList.phone}
                                                                    </p>
                                                                </MDBCol>
                                                            </MDBRow>
                                                        </MDBCol>
                                                    </MDBRow>
                                                </section>


                                                {/*})*/}

                                            </MDBContainer>
                                        </p>
                                    </MDBTabPane>

                                    {/*tab 2*/}
                                    <MDBTabPane tabId="2">
                                        <p>
                                            <MDBContainer className="mt-5">
                                                <section className="my-5">
                                                    <MDBRow>
                                                        <MDBCol lg="5" className="text-center text-lg-left">
                                                            <img className="img-fluid"
                                                                 src="https://www.thespruce.com/thmb/W4mKoo6FGlcDtxc_Xhu5zRigSx8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/twenty20_02ca2991-5a89-4878-bf45-afd5edc6bdf9-594828ba5f9b58d58acb8579-5c0eaf8ac9e77c000147d2dc.jpg"
                                                                 alt=""/>
                                                            <br/>
                                                            <br/>
                                                        </MDBCol>
                                                        <MDBCol lg="7">
                                                            <form>
                                                                <MDBRow className="mb-3">
                                                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text" >
                                                                       First Name
                                                                    </label>
                                                                    <input type="text" id="defaultFormRegisterNameEx" className="form-control" value={this.state.firstNameEdit}
                                                                           onChange={this.onChangefirstName} name="firstName"/>
                                                                    <br/>
                                                                </MDBRow>
                                                                <MDBRow className="mb-3">
                                                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                                                        Last Name
                                                                    </label>
                                                                    <input type="text" id="defaultFormRegisterNameEx" className="form-control" value={this.state.lastNameEdit}
                                                                           onChange={this.onChangelastName}  name="lastName"/>
                                                                    <br/>
                                                                </MDBRow>
                                                                <MDBRow className="mb-3">
                                                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                                                        Email Address
                                                                    </label>
                                                                    <input type="email" id="defaultFormRegisterNameEx" className="form-control" value={this.state.emailEdit}
                                                                           onChange={this.onChangeEmail}  name="email"/>
                                                                    <br/>
                                                                </MDBRow>
                                                                <MDBRow className="mb-3">
                                                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                                                        Password
                                                                    </label>
                                                                    <input type="password" id="defaultFormRegisterNameEx" className="form-control" value={this.state.passwordEdit}
                                                                           onChange={this.onChangePassword}  name="password"/>
                                                                    <br/>
                                                                </MDBRow>
                                                                <MDBRow className="mb-3">
                                                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                                                        Confirm Password
                                                                    </label>
                                                                    <input type="password" id="defaultFormRegisterNameEx" className="form-control" value={this.state.confirmPasswordEdit}
                                                                           onChange={this.onChangeConfirmPassword}  name="confirmPassword"/>
                                                                    <br/>
                                                                </MDBRow>
                                                                <MDBRow className="mb-3">
                                                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                                                        Phone
                                                                    </label>
                                                                    <input type="text" id="defaultFormRegisterNameEx" className="form-control" value={this.state.phoneEdit}
                                                                           onChange={this.onChangePhone} name="phone"/>
                                                                    <br/>
                                                                </MDBRow>


                                                                <MDBBtn color="info" type="button" onClick={()=> this.updateUserProfile(this.state.idEdit,this.state.firstNameEdit,this.state.lastNameEdit,
                                                                    this.state.emailEdit,this.state.usernameEdit,this.state.passwordEdit,this.state.confirmPasswordEdit,this.state.phoneEdit)}> Update Profile</MDBBtn>



                                                            </form>
                                                        </MDBCol>
                                                    </MDBRow>
                                                </section>
                                            </MDBContainer>
                                        </p>
                                    </MDBTabPane>
                                </MDBTabContent>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCol>

            </Router>

        );

    }



};
