import DATA from '../data/data'

export const get_all_lists = async () => {
    return Promise.all(DATA.lists);
}

export const get_lists_of_board = async (id) => {
    return Promise.all(DATA.lists.filter(list => list.boardId == id));
}