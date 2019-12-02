import DATA from '../data/data'

export const get_all_tasks = async () => {
    return Promise.all(DATA.tasks);
}

export const get_tasks_by_listId = async (listId) => {
    return Promise.all(DATA.tasks.filter(task => task.listId === listId));
}

export const _get_task_by_listId = (listId) => {
    return DATA.tasks.filter(x => x.listId === listId)
}