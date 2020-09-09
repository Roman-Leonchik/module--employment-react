import React from "react";
import "./main.scss";
import { Link } from 'react-router-dom';

const TabButton = props => (
    <Link
        to={props.link}
        id={props.id}
        className={props.idActiveButton === props.id ? 'tablinks active' : 'tablinks'}
        onClick={props.onClick}>{props.text}
    </Link>
);

export default TabButton;