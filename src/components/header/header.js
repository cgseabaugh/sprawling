import React, { Component, useState } from "react";
import Login from '../login/login'
import {Link, Navigate, useNavigate} from 'react-router-dom';

import './header.css'

function Header(){

    return(
        <div className="flex-row site-header">
            <div className="flex-row site-title">
                <a className="mysite" href="https://www.gabeseabaugh.com">gabeseabaugh.com</a>
            </div>
            <div className="flex-row site-title">
                <a className="sprawling-link" href="https://sprawling.herokuapp.com/">Sprawling</a>
            </div>
        </div>
    )
}

export default Header;