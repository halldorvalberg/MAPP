import * as constants from '../constants'
import data from '../data/data';

const init_state = {...data};

export default (state = init_state, action) => {
    const new_state = {...state};
    const {type, payload} = action;
    switch(type){
        case constants.CREATE_BOARD: {
            const unused_id = 0 //Should find the highest unused id integer in boards state
            new_state.boards = [...new_state.boards, {...payload.board, id: unused_id}];
            return new_state;
        }
        default: {
            return state; 
        }
    }    
};