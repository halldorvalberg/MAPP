import * as constants from '../constants'

export const Create_Task = (task_input) => ({
    type: constants.CREATE_TASK,
    payload: {
        task_input
    }
});

export const Remove_Task = (taskId) => ({
    type: constants.REMOVE_TASK,
    payload : {
        taskId
    }
})

export const Update_Task = (task) => ({
    type: constants.UPDATE_TASK,
    payload: {
        task
    }
})