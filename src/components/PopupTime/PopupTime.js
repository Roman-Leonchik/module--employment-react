import React from "react";
import PopupTimeItemList from "../../containers/PopapTimeItemList";
import './main.scss';

const PopupTime = props => {
    const userName = props.arrayModuleReport.USERS[props.popapIdUser].INFO.FULL_NAME;

    return (
        <div className='popup--wrap'>
            <div className="popup--item">
                <button className="popup--close" onClick={props.popapHide} ></button>
                <div className="name">{userName+'. '}Задачи за текущий день</div>
                <div className="popup--container">
                    <div className="modul--head">
                        <div className="item">Задача</div>
                        <div className="item">Время</div>
                    </div>
                    <PopupTimeItemList  arrayModuleReport={props.arrayModuleReport} popapIdUser={props.popapIdUser}/>
                </div>
            </div>
        </div>
    )
}

export default PopupTime;