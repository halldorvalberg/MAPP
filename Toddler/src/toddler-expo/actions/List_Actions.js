import * as constants from '../constants'

export const Create_List = (list_input) => ({
    type: constants.CREATE_LIST,
    payload: {
        list_input
    }
}) 