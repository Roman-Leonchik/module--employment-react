import React from "react";
import ReportTimeItem from "../components/ReportTimeItem/ReportTimeItem";

const ReportTimeItemList = props => {
    const listItem = [];
    if(props.arrayModuleReport !== null) {
        for (const key of Object.keys(props.arrayModuleReport.STRUCTURE)) {
            var array = props.arrayModuleReport.STRUCTURE;
            //if (array[key].EMPLOYEES.length !== 0) {
            if (array[key].SHOW !== 0) {
                listItem.push(
                    <div className="departament--title" key={array[key].ID}>{array[key].NAME}</div>
                )
                for(let i = 0; i < array[key].EMPLOYEES.length; i++) {
                    var keyItem = array[key].EMPLOYEES[i],
                        clickNameUser = new Function('if (BX.IM) { BXIM.openMessenger('+props.arrayModuleReport.USERS[keyItem].INFO.ID+'); return false; } else { window.open(\'\', \'\', \'status=no,scrollbars=yes,resizable=yes,width=700,height=550,top=\'+Math.floor((screen.height - 550)/2-14)+\',left=\'+Math.floor((screen.width - 700)/2-5)); return false; }');
                    if(props.arrayModuleReport.USERS[keyItem].IS_TRACKED !== 0 ) {
                        var trackedWork = props.arrayModuleReport.TASKS[props.arrayModuleReport.USERS[keyItem].IS_TRACKED].TITLE,
                            trackedLinkWork = props.pageDomain + '/company/personal/user/'+props.arrayModuleReport.USERS[keyItem].INFO.ID+'/tasks/task/view/'+props.arrayModuleReport.USERS[keyItem].IS_TRACKED+'/';
                    } else {
                        trackedWork = null;
                        trackedLinkWork = null;
                    }
                    listItem.push(
                        <ReportTimeItem
                            id={props.arrayModuleReport.USERS[keyItem].INFO.ID}
                            key={props.arrayModuleReport.USERS[keyItem].INFO.ID}
                            userName={props.arrayModuleReport.USERS[keyItem].INFO.FULL_NAME}
                            userTime={props.arrayModuleReport.USERS[keyItem].TIME_PRINT}
                            classButtonTime={props.arrayModuleReport.USERS[keyItem].TIME === 0 ? 'buttonTime' : 'buttonTime active'}
                            userWork={trackedWork}
                            linkWork={trackedLinkWork}
                            onClickName={clickNameUser}
                            clickPopap={props.clickPopap}
                            idUser={props.arrayModuleReport.USERS[keyItem].INFO.ID}
                        />
                    );
                }
            }
        }
    }
    return listItem
};

export default ReportTimeItemList;