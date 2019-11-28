import DATA from '../data/data.json';

export function get_all_boards() {
    return DATA.boards
}

export const get_board_by_id = async (id) => {
    return Promise.all(DATA.boards.filter(board => board.boardId == id));
    // const foo = DATA.boards.filter(x => x.id == id);
    // console.log(foo);
    // return Promise.all(foo);
    // return Promise.all(Object.keys(DATA.boards)[id]);
}

export const _get_board_by_id = (id) => {
    single_board = DATA.boards.filter(x => x.id === id);
    return single_board[0];
}