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
        case constants.REMOVE_BOARD: {
            console.log("i got over here")
            //To delete all tasks and all lists bound to board we must find 
            // all lists bound to the board and their id
            const all_lists = new_state.lists
                //Filter out and return all lists that are bound to the board
                .filter(({boardId}) => boardId === payload.id)
                //Only output the id, no need for the whole object
                .map((x) => x.id);

            //Remove all tasks bound to all lists bound to board
            //If the tasks list id is included in the all_lists array it is removed 
            new_state.tasks = new_state.tasks.filter(({listId}) => !all_lists.includes(listId));
            //Remove all lists bound to board
            new_state.lists = new_state.lists.filter(({boardId}) => boardId !== payload.id);
            //And finally remove the board it self
            new_state.boards = new_state.boards.filter(({id}) => id !== payload.id);

            return new_state
        }
        case constants.UPDATE_BOARD: {
            
            //NEEDS IMPLEMENTATION SEE UPDATE_TASK
            return new_state
        }
        case constants.CREATE_LIST: {
            const unused_id = _get_lowest_unused_id(state.lists)
            new_state.lists = [...new_state.lists, {...payload.list_input, id: unused_id}]
            return new_state;
        }
        case constants.REMOVE_LIST: {
            new_state.tasks = new_state.tasks.filter(({listId}) => listId !== payload.id)
            new_state.lists = new_state.lists.filter(({id}) => id !== payload.id)
            return new_state
        }
        case constants.UPDATE_LIST: {
            
            //NEEDS IMPLEMENTATION SEE UPDATE_TASK
            return new_state
        }
        case constants.CREATE_TASK: {
            const unused_id = _get_lowest_unused_id(state.tasks)
            new_state.tasks = [...new_state.tasks, {...payload.task_input, id: unused_id}]
            return new_state;
        }
        case constants.REMOVE_TASK: {
            console.log("Removing task number " + payload.taskId)
            new_state.tasks = new_state.tasks.filter(({id}) => id !== payload.taskId)
            return new_state
        }
        case constants.UPDATE_TASK: {
            new_state.tasks = new_state.tasks.map((task) => task.id === payload.task.id ? payload.task : task)
            return new_state
        }
        default: {
            console.log('State returned unchanged')
            return state;
        }
    }
};