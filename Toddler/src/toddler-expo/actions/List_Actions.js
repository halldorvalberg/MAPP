import * as constants from '../constants'

export const Create_List = (list_input) => ({
    type: constants.CREATE_LIST,
    payload: {
        list_input
    }
}) 

export const Remove_List = (id) => ({
    type: constants.REMOVE_LIST,
    payload: {
        id
    }
});
export const Update_List = (input) => ({
    type: constants.UPDATE_LIST,
    payload: {
        input
    }
});