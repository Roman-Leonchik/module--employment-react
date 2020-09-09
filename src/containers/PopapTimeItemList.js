import React from "react";

const PopupTimeItemList = props => {
    const userTasks = props.arrayModuleReport.USERS[props.popapIdUser].TASKS,
          userListTask = [];

    if (Object.keys(userTasks).length !== 0) {
        for (const key of Object.keys(userTasks)) {
            var nameTasks = props.arrayModuleReport.TASKS[key].TITLE,
                idTasks = props.arrayModuleReport.TASKS[key].ID,
                linkTask = 'https://dev-bitrix.by/company/personal/user/'+props.popapIdUser+'/tasks/task/view/'+key+'/',
                timestamp = userTasks[idTasks],
                hours = Math.floor(timestamp / 60 / 60),
                minutes = Math.floor(timestamp / 60) - (hours * 60),
                seconds = timestamp % 60,
                timeTask = [
                    hours.toString().padStart(2, '0'),
                    minutes.toString().padStart(2, '0'),
                    seconds.toString().padStart(2, '0')
                ].join(':');
            userListTask.push(
                <div className="task--item" key={'timeID'+idTasks}>
                    <div className="task--name"><a href={linkTask}>{nameTasks}</a></div>
                    <div className="task--time">{timeTask}</div>
                </div>
            )
        }
    }

    return userListTask
}

export default PopupTimeItemList;