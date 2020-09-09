import React from "react";
import "./main.scss";

const ReportTimeItem = props => (
    <div className="userTime--wrapp" id={props.id}>
        <div className="user-name"><button onClick={props.onClickName}>{props.userName}</button></div>
        <div className="user-time"><button className={props.classButtonTime} onClick={props.clickPopap} id={props.idUser}>{props.userTime}</button></div>
        {props.linkWork === null ? '' : <div className="user-work"><a href={props.linkWork}>{props.userWork}</a></div>}
    </div>
);

export default ReportTimeItem;