import React, {Component} from 'react';
import Swal from "sweetalert2";

export default class UserLogout extends Component {

    componentDidMount(){
        localStorage.removeItem('UserSignedIn');
        localStorage.removeItem('userid');
        this.props.history.push('/');
        window.location.reload();
    }
    render() {

        return (
            <div>
            </div>
        );
    }

}