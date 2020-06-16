import { GET_SCHOOLS } from '../constants';

const schoolsReducer = (state = [], action) => {
    switch(action.type) {
        case GET_SCHOOLS:
            state = action.schools;
            break;
    };
    return state;
};

export default schoolsReducer;