import axios from 'axios';
import { _getSchools } from './actions';

export const getSchools = () => {
    return async dispatch => {
        try {
            // axios call here
            const tempdata = 'hello';
            dispatch(_getSchools(tempdata));
        } catch(err) {
            console.log(err);
        }
    };
};