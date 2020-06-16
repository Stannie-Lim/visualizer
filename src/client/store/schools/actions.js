import { GET_SCHOOLS } from '../constants';

export const _getSchools = schools => {
    return {
        type: GET_SCHOOLS,
        schools
    };
};