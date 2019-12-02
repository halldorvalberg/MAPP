import MOCK_DATA from '../../resources/data/data.json'

const _state = {...MOCK_DATA}

export default (state = _state, action) => {
    const new_state = {...state};
    const {type, payload} = action
    switch(type) {
        default: {
            console.log("Execute order 66!")
            return state;
        }
    }
};