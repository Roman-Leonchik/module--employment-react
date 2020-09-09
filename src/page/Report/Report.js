import React from "react";
import "./main.scss";
import ReportTimeItemList from "../../containers/ReportTimeItemList";

const Report = props => {
    return (
        <div className="report--wrapp">
            <div className="modul--head">
                <div className="item">Сотрудник</div>
                <div className="item">Время</div>
                <div className="item">Задача</div>
            </div>
            <ReportTimeItemList arrayModuleReport={props.arrayModuleReport}  clickPopap={props.clickPopap}/>
        </div>
    );
}

export default Report;