import React from "react";
import {Chart} from "react-google-charts";

const ScheduleItemList = props => {
    const listItemSchedule = [];
    if(props.arrayModuleReport !== null) {
        for (const key of Object.keys(props.arrayModuleReport.STRUCTURE)) {
            var array = props.arrayModuleReport.STRUCTURE,
                numberColumn = 0;
            if (array[key].EMPLOYEES.length !== 0 && array[key].SHOW !== 0) {
                var userStructure = [
                    [
                        { type: 'string', id: 'Position' },
                        { type: 'string', id: 'Name' },
                        { type: 'date', id: 'Start' },
                        { type: 'date', id: 'End' },
                    ],
                ];
                listItemSchedule.push(
                    <div className="departament--title" key={array[key].ID}>{array[key].NAME}</div>
                )
                for(let i = 0; i < array[key].EMPLOYEES.length; i++) {
                    var keyItem = array[key].EMPLOYEES[i],
                        userItem = [],
                        userTasks = [],
                        userInfo = props.arrayModuleReport.USERS[keyItem];
                    //Begin time work
                    if (userInfo.TIMEMAN !== undefined) {
                        var start = ((userInfo.TIMEMAN[0].DATE_START).replace(/\s/g, ':')).replace(/\./g, ":").split(/:/),
                            finish = ((userInfo.TIMEMAN[0].DATE_FINISH).replace(/\s/g, ':')).replace(/\./g, ":").split(/:/);
                        userItem = [
                            props.arrayModuleReport.USERS[keyItem].INFO.FULL_NAME,
                            'Рабочее время',
                            new Date( Number(start[2]), Number(start[1]-1), Number(start[0]),Number(start[3]),Number(start[4],Number(start[5]))),
                            new Date( Number(finish[2]), Number(finish[1]-1), Number(finish[0]),Number(finish[3]),Number(finish[4],Number(finish[5]))),
                        ]
                    }
                    if (userItem.length !== 0) {
                        numberColumn = numberColumn+41;
                        userStructure.push(userItem)
                    }
                    //End time work

                    //Begin task user
                    if (props.arrayModuleReport.USERS[keyItem].TASKS_ELAPSED !== undefined) {
                        const userTaskArray = props.arrayModuleReport.USERS[keyItem].TASKS_ELAPSED;
                        numberColumn = numberColumn+31;
                        for (const keyTask of Object.keys(userTaskArray)) {
                            for(let h = 0; h < userTaskArray[keyTask].length; h++) {
                                if (userTaskArray[keyTask][h].ID !== undefined) {
                                    var taskDateStart = ((userTaskArray[keyTask][h].DATE_START).replace(/\s/g, ':')).replace(/\./g, ":").split(/:/),
                                        taskDateStop = ((userTaskArray[keyTask][h].DATE_STOP).replace(/\s/g, ':')).replace(/\./g, ":").split(/:/),
                                        taskId = userTaskArray[keyTask][h].TASK_ID;
                                    userTasks = [
                                        props.arrayModuleReport.USERS[keyItem].INFO.FULL_NAME,
                                        props.arrayModuleReport.TASKS[taskId].TITLE,
                                        new Date( Number(taskDateStart[2]), Number(taskDateStart[1]-1), Number(taskDateStart[0]),Number(taskDateStart[3]),Number(taskDateStart[4]),Number(taskDateStart[5])),
                                        new Date(Number(taskDateStop[2]), Number(taskDateStop[1]-1), Number(taskDateStop[0]),Number(taskDateStop[3]),Number(taskDateStop[4]),Number(taskDateStop[5])),
                                    ]
                                    userStructure.push(userTasks)
                                }
                            }
                        }
                    }
                    //End task user
                }
                listItemSchedule.push(
                    <Chart key={'STRUCTURE'+array[key].ID}
                           width={'100%'}
                           height={(numberColumn) + 50 + 'px'}
                           chartType="Timeline"
                           loader={<div>Loading Chart</div>}
                           data={userStructure}
                           rootProps={{ 'data-testid': '6' }}
                    />
                )
            }
        }
    }
    return listItemSchedule
}

export default ScheduleItemList;