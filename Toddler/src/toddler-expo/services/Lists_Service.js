import DATA from '../data/data'

export const get_all_lists = async () => {
    return Promise.all(DATA.lists);
}

export const _get_all_lists = () => {
    return DATA.lists;
}

export const get_lists_of_board = async (id) => {
    return Promise.all(DATA.lists.filter(list => list.boardId == id));
}

export const _get_lists_by_boardid = (boardId) => {
    return DATA.lists.filter(x => x.boardId === boardId)
}

export const _get_list_by_id = (listId) => {
    return DATA.lists.filter(x => x.id === listId)
}