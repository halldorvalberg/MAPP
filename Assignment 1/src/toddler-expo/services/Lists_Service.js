import DATA from '../data/data'

export const get_all_lists = async () => {
    return Promise.all(DATA.lists);
}

export const _get_all_lists = () => {
    return DATA.lists;
}

export const get_lists_by_boardid = async (boardId) => {
    return Promise.all(DATA.lists.filter(list => list.boardId == boardId));
}

export const _get_lists_by_boardid = (boardId) => {
    return DATA.lists.filter(x => x.boardId === boardId)
}

export const get_list_by_id = async (listId) => {
    return Promise.all(DATA.lists.filter(list => list.id === listId))
}

export const _get_list_by_id = (listId) => {
    return DATA.lists.filter(x => x.id === listId)
}