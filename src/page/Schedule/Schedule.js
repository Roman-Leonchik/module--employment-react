import React from "react";
import ScheduleItemList from "../../containers/ScheduleItemList";

const Schedule = props => {
    return (
        <div className="schedule--wrapp">
            <div className="modul--head">
                <div className="item">Сотрудник</div>
                <div className="item">Рабочее время/Задача</div>
            </div>
            <ScheduleItemList arrayModuleReport={props.arrayModuleReport}/>
        </div>
    );
}

export default Schedule;