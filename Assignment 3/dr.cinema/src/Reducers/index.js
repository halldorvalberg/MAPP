export default (state = {}, action) => {
    const new_state = { ...state };
    const { type, payload } = action;
    switch (type) {
        default: {
            return state;
        }
    }
};