import DATA from '../data/data'

export const get_all_tasks = async () => {
    return Promise.all(DATA.tasks);
}

export const get_tasks_of_list = async (id) => {
    return Promise.all(DATA.tasks.filter(task => task.listId = id));
}