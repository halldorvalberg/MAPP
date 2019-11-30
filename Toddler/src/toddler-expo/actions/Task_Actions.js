import * as constants from '../constants'

export const Create_Task = (task_input) => ({
    type: constants.CREATE_TASK,
    payload: {
        task_input
    }
}) 