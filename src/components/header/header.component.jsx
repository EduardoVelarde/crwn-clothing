import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.scss'
import{auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux'

import{ReactComponent as Logo} from '../../assets/crown.svg'
const Header =({currentUser})=>(
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
        <Link className="option" to="/shop">
            SHOP
        </Link>

        <Link className="option" to="/shop">
            CONTACT
        </Link>
        <Link>
        {
            currentUser?
            <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
            :
            <Link className="option" to="/signin">SIGN IN</Link>
        }
        </Link>
        </div>
    </div>
);

const mapStateToProps = state=> ({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps) (Header);