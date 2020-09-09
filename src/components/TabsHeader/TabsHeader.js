import React from 'react';
import TabButton from "../TabButton/TabButton";
import "./main.scss";

const TabsHeader = props => {
    return(
        <div className="tabs-header">
            <div className="tab">
                <TabButton
                    link="/report"
                    id="button_report"
                    text="Отчет"
                    onClick={props.tabClick}
                    idActiveButton={props.idActiveButton}
                />
                <TabButton
                    link="/schedule"
                    id="button_schedule"
                    text="График"
                    onClick={props.tabClick}
                    idActiveButton={props.idActiveButton}
                />
            </div>
            <div className="date">
                <input type="date" onChange={props.changeDate}/>
            </div>
        </div>
    );
}

export default TabsHeader;