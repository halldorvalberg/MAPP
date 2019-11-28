import DATA from '../data/data.json';

export const get_all_boards = async () => {
    return Promise.all(DATA.boards);
}

export const get_board_by_id = async (id) => {
    return Promise.all(DATA.boards.filter(board => board.boardId == id));
    // const foo = DATA.boards.filter(x => x.id == id);
    // console.log(foo);
    // return Promise.all(foo);
    // return Promise.all(Object.keys(DATA.boards)[id]);
}