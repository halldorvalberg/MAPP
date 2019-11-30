import * as constants from '../constants'
import data from '../data/data';

const init_state = { ...data };

function _get_lowest_unused_id(array) {
    let low = -1;
    for (let i = 0; i < array.length; i = i + 1) {
        if ((i + 1) !== array[i].id) { low = (i + 1); break; }
    }
    if (low == -1) { low = (array.length + 1); }
    return low;
}

export default (state = init_state, action) => {
    const new_state = { ...state };
    const { type, payload } = action;
    switch (type) {
        case constants.CREATE_BOARD: {
            
            const unused_id = _get_lowest_unused_id(state.boards) //Should find the highest unused id integer in boards state         
            new_state.boards = [...new_state.boards, { ...payload.board_input, id: unused_id }];
            return new_state;
        }
        case constants.CREATE_LIST: {
            const unused_id = _get_lowest_unused_id(state.lists)
            new_state.lists = [...new_state.lists, {...payload.list_input, id: unused_id}]
            return new_state;
        }
        case constants.CREATE_TASK: {
            console.log('i got to over here')
            const unused_id = _get_lowest_unused_id(state.tasks)
            console.log('unused id found')
            console.log('getting ready to deposit payload')
            console.log(payload)
            new_state.tasks = [...new_state.tasks, {...payload.task_input, id: unused_id}]
            console.log('payload added to new state')
            return new_state;
        }
        default: {
            console.log('State returned unchanged')
            return state;
        }
    }
};