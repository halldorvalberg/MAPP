import * as constants from '../constants'

export const Create_Board = (board_input) => ({
    type: constants.CREATE_BOARD,
    payload: {
        board_input
    }
}) 

export const Remove_Board = (id) => ({
    type: constants.REMOVE_BOARD,
    payload: {
        id
    }
}) 
export const Update_Board = (input) => ({
    type: constants.UPDATE_BOARD,
    payload: {
        input
    }
}) 