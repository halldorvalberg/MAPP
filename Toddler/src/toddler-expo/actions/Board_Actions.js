import * as constants from '../constants'

export const Create_Board = (board_input) => ({
    type: constants.CREATE_BOARD,
    payload: {
        board_input
    }
}) 